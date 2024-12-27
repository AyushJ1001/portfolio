export function Footer() {
  return (
    <footer className="bg-gray-900 py-6 md:py-8">
      <div className="container mx-auto px-4 text-center text-sm md:text-base">
        <p>
          &copy; {new Date().getFullYear()} Ayush Juvekar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
