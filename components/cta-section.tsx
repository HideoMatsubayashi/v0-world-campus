import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-emerald-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">今すぐコミュニティに参加しよう</h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          世界中の日本人留学生とつながり、あなたの留学体験をより豊かなものにしませんか？
          登録は無料で、すぐに始められます。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3">
            <Mail className="mr-2 h-5 w-5" />
            メールで登録
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-emerald-700 px-8 py-3 bg-transparent"
          >
            詳細を見る
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="border-t border-emerald-500 pt-8">
          <p className="text-emerald-100 text-sm">© 2024 World Campus. すべての権利を保有しています。</p>
        </div>
      </div>
    </section>
  )
}
