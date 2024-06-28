export function ContactInfo() {
  return (
    <div>
      <span className="text-center text-muted-foreground">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="flex items-center">
          <span className="font-bold">Email:</span>
          <span className="ml-2">
            <a className="text-primary-foreground" href="mailto:gent.bajko@gmail.com">
              gent.bajko@gmail.com
            </a>
          </span>
        </p>
      </span>
    </div>
  );
}
