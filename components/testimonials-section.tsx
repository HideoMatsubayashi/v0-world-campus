import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "田中 美咲",
      location: "カナダ・トロント",
      avatar: "/japanese-female-student-profile-photo.png",
      content: "World Campusのおかげで、同じ悩みを持つ留学生と出会えました。特に住居探しの情報がとても役立ちました！",
      rating: 5,
    },
    {
      name: "佐藤 健太",
      location: "アメリカ・ニューヨーク",
      avatar: "/japanese-male-student-profile-photo.png",
      content: "現地の生活情報だけでなく、メンタル面でのサポートも受けられて本当に助かっています。",
      rating: 5,
    },
    {
      name: "山田 花子",
      location: "イギリス・ロンドン",
      avatar: "/japanese-student-profile-photo.png",
      content: "インターンシップの情報を共有してもらい、念願の企業で働くことができました！",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">留学生の声</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World Campusを利用している留学生の実際の体験談をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
