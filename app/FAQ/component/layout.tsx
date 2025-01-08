export default function FAQLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white">
        <main className="pt-16 pb-20">
          {children}
        </main>
      </div>
    )
  }
  
  