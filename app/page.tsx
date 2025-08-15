import { ProductCatalog } from "@/components/product-catalog";
import { Header } from "@/components/header";
import { CategoryGrid } from "@/components/category-grid";
import prisma from "@/lib/prisma";

export default async function HomePage() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      Category: {
        select: {
          name: true,
        },
      },
    },
  });

  console.log({ products });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            E-Commerce Store
          </h1>
          <p className="text-gray-600">
            Discover our amazing products with great prices
          </p>
        </div>

        {/* Add Category Grid Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Shop by Category
          </h2>
          <CategoryGrid />
        </section>

        <ProductCatalog />
      </main>
    </div>
  );
}
