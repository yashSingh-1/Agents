import { CheckCircle, Smartphone, Zap, Users } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Intuitive Design",
      description: "Clean and modern interface that makes app presentation a breeze"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for smooth and responsive experience"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work together with your team in real-time"
    },
    {
      icon: CheckCircle,
      title: "Easy to Use",
      description: "Get started quickly with our user-friendly platform"
    }
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">Powerful Features</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to present your app idea professionally
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border bg-muted">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
