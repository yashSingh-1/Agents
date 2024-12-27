import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold tracking-tight text-primary">
              Present Your App Idea With Confidence
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your app concept into a compelling presentation that captures attention and drives engagement.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="App presentation preview"
              className="rounded-lg shadow-2xl"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

