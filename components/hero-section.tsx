import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, MessageCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            世界中の留学生と
            <span className="text-emerald-600 block">つながろう</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            World Campusは、世界各地で学ぶ日本人留学生のためのコミュニティプラットフォームです。
            体験談をシェアし、情報を交換し、新しい友達を見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
              今すぐ参加する
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 bg-transparent"
            >
              詳しく見る
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">50+ 国と地域</h3>
            <p className="text-gray-600">世界各地の留学生とつながる</p>
          </div>
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">10,000+ メンバー</h3>
            <p className="text-gray-600">活発なコミュニティ</p>
          </div>
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 サポート</h3>
            <p className="text-gray-600">いつでも相談できる環境</p>
          </div>
        </div>
      </div>
    </section>
  )
}
