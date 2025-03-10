export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="mb-4 text-sm md:text-base">
            Feel free to reach out to me for any opportunities or
            collaborations.
          </p>
          <a
            href="mailto:aajuveka@mtu.edu"
            className="text-blue-400 hover:underline text-sm md:text-base block mb-2"
          >
            aajuveka@mtu.edu
          </a>
          <p className="mt-2 text-sm md:text-base">+1 (906) 299 4314</p>
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/ayushjuvekar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm md:text-base"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
