"use client"

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Smartphone, Shirt, BookOpen, Home, Dumbbell, Grid3X3 } from 'lucide-react'
import { products } from '@/lib/products-data'

const categories = [
  {
    id: 'all',
    name: 'All Products',
    icon: Grid3X3,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    description: 'Browse our complete collection'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: Smartphone,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    description: 'Latest tech gadgets and devices'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    icon: Shirt,
    color: 'bg-gradient-to-br from-pink-500 to-pink-600',
    description: 'Fashion and apparel for everyone'
  },
  {
    id: 'books',
    name: 'Books',
    icon: BookOpen,
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    description: 'Knowledge and entertainment'
  },
  {
    id: 'home',
    name: 'Home & Garden',
    icon: Home,
    color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    description: 'Everything for your home'
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: Dumbbell,
    color: 'bg-gradient-to-br from-red-500 to-red-600',
    description: 'Fitness and sports equipment'
  }
]

export function CategoryGrid() {
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return products.length
    return products.filter(product => product.category === categoryId).length
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => {
        const Icon = category.icon
        const productCount = getCategoryCount(category.id)
        
        return (
          <Link key={category.id} href={`/category/${category.id}`}>
            <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {category.description}
                </p>
                
                <Badge variant="secondary" className="text-xs">
                  {productCount} {productCount === 1 ? 'item' : 'items'}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
