import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, MapPin, Heart, Briefcase } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "学習リソース",
      description: "各国の教育システムや学習方法について詳しい情報を共有",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: MapPin,
      title: "現地情報",
      description: "住居、交通、生活費など実用的な現地情報を交換",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Heart,
      title: "メンタルサポート",
      description: "留学の悩みや不安を共有し、お互いに支え合う",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Briefcase,
      title: "キャリア支援",
      description: "インターンシップや就職活動の情報を共有",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">留学生活を支える機能</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World Campusでは、留学生活のあらゆる場面で役立つ情報とサポートを提供しています
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
