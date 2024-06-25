import * as mailchimp from "@mailchimp/mailchimp_marketing";

interface CardData {
  title: string;
  description: string;
  content: string;
  link: string;
  date: string;
}

const apiKey = process.env.MAILCHIMP_API_KEY as string;
const server = process.env.MAILCHIMP_DC as string;
const listId = process.env.MAILCHIMP_LIST_ID as string;
const templateId = parseInt(process.env.MAILCHIMP_TEMPLATE_ID || "49", 49);

mailchimp.setConfig({
  apiKey: apiKey,
  server: server,
});

const createCampaign = async (article: CardData): Promise<string> => {
  const response = await mailchimp.campaigns.create({
    type: "regular",
    recipients: { list_id: listId },
    settings: {
      subject_line: `New Article on gentbajko.dev: ${article.title}`,
      preview_text: article.description,
      title: article.title,
      from_name: "Gent Bajko",
      reply_to: "gent.bajko@gmail.com",
      template_id: 0,
    },
  });

  if ("id" in response) {
    return response.id;
  } else {
    throw new Error(`Failed to create campaign: ${response.detail}`);
  }
};

const setCampaignContent = async (
  campaignId: string,
  cardData: CardData
): Promise<void> => {
  const response = await mailchimp.campaigns.setContent(campaignId, {
    template: {
      id: await templateData().then((response) => {
        return response.templates[0].id;
      }),
    },
    plain_text: `Title: ${cardData.title}\nDescription: ${cardData.description}\nContent: ${cardData.content}\nLink: ${cardData.link}\nDate: ${cardData.date}`,
    html: `<html>
      <head>
        <title>${cardData.title}</title>
      </head>
      <body>
        <h1>${cardData.title} - ${cardData.date}</h1>
        <p>${cardData.description}</p>
        <a href="${cardData.link}">Read more</a>
      </body>
    </html>`,
  });

  if ("status" in response && response.status >= 400) {
    throw new Error(`Failed to set campaign content: ${response.detail}`);
  }

  console.log("Campaign content set successfully:", response);
};

const sendCampaign = async (campaignId: string): Promise<void> => {
  await mailchimp.campaigns.send(campaignId);
};

const templateData = async () => {
  return mailchimp.templates.list();
};

export const sendMailchimpEmail = async (cardData: CardData) => {
  const campaignId = await createCampaign(cardData);
  await setCampaignContent(campaignId, cardData);
  await sendCampaign(campaignId);
};
