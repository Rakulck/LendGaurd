import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="mb-8 text-xl">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="mx-2 text-blue-500">/</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="text-blue-500 hover:text-blue-700"
            >
              {item.label}
            </Link>
          ) : (
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
