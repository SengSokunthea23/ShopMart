import { Header } from '@/components/header'
import { CategoryProductGrid } from '@/components/category-product-grid'
import { products } from '@/lib/products-data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const categoryNames = {
  all: 'All Products',
  electronics: 'Electronics',
  clothing: 'Clothing',
  books: 'Books',
  home: 'Home & Garden',
  sports: 'Sports'
}

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return [
    { slug: 'all' },
    { slug: 'electronics' },
    { slug: 'clothing' },
    { slug: 'books' },
    { slug: 'home' },
    { slug: 'sports' }
  ]
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params
  
  if (!categoryNames[slug as keyof typeof categoryNames]) {
    notFound()
  }

  const categoryName = categoryNames[slug as keyof typeof categoryNames]
  const filteredProducts = slug === 'all' 
    ? products 
    : products.filter(product => product.category === slug)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryName}</h1>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        <CategoryProductGrid products={filteredProducts} />
      </main>
    </div>
  )
}
