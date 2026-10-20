export default function HomePage() {
  return (
    <>
      {/* Шапка */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <p className="text-2xl font-bold text-[#1a2a52]">BOXPACK</p>
          <nav className="hidden gap-6 text-sm text-[#1a2a52] md:flex">
            <a href="#steps">Как начать</a>
            <a href="#services">Услуги</a>
            <a href="#why">Почему мы</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Первый экран */}
      <section className="bg-[#1a2a52] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8fb3f5]">Фулфилмент</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Фулфилмент,<br />который держит<br />сроки и репутацию
            </h1>
            <p className="mt-5 max-w-md text-sm text-white/70">
              Принимаем товар, храним, собираем заказы и передаём в доставку.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <a href="#steps" className="text-sm text-[#8fb3f5] underline underline-offset-4">Как это работает</a>
              <a href="#contacts" className="rounded-[10px] bg-[#2f6fdb] px-6 py-3 text-sm font-semibold">Оставить заявку</a>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[["500+", "магазинов"], ["24/7", "обработка"], ["99%", "в срок"]].map(([n, t]) => (
                <div key={n} className="rounded-[10px] bg-white/10 p-4">
                  <p className="text-2xl font-bold">{n}</p>
                  <p className="mt-1 text-xs text-white/70">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex aspect-video items-center justify-center rounded-[10px] bg-[#24365f] text-sm text-white/50">
            Видео о складе
          </div>
        </div>
      </section>

      {/* Как начать работать с нами */}
      <section id="steps" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold text-[#1a2a52] sm:text-3xl">Как начать работать с нами</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Оставляете заявку", "Получаете расчёт", "Заключаем договор", "Передаёте товар", "Принимаем на склад", "Настраиваем интеграцию", "Отгружаем заказы"].map((t, i) => (
              <div key={t} className="rounded-[10px] bg-[#f0f0f0] p-5">
                <p className="text-xs font-bold text-[#1a2a52]">ШАГ {i + 1}</p>
                <h3 className="mt-2 text-xs font-semibold text-[#1a2a52]">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги фулфилмента */}
      <section id="services" className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold text-[#1a2a52] sm:text-3xl">Услуги фулфилмента</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Приёмка товара", "Хранение", "Сборка заказов", "Упаковка", "Маркировка", "Отгрузка и доставка", "Возвраты"].map((t) => (
              <div key={t} className="border-t-2 border-[#2f6fdb] bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#1a2a52]">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему выбирают BOXPACK */}
      <section id="why" className="bg-[#1a2a52] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Почему выбирают BOXPACK</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Скорость", "Прозрачность", "Надёжность", "Поддержка"].map((t) => (
              <div key={t} className="rounded-[10px] bg-white/10 p-5">
                <h3 className="text-sm font-bold">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer id="contacts" className="bg-[#111d3a] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold">BOXPACK</p>
          <p className="text-white/60">Оставьте заявку — рассчитаем стоимость.</p>
          <a href="mailto:info@boxpack.ru" className="rounded-[10px] bg-[#2f6fdb] px-5 py-2.5 text-center font-semibold">Написать нам</a>
        </div>
      </footer>
    </>
  );
}