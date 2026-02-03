import './App.css'

const brands = [
  'AEG',
  'Ardo',
  'Ariston',
  'Asko',
  'Atlant',
  'Beko',
  'Bosch',
  'Brandt',
  'Candy',
  'Daewoo',
  'Electrolux',
  'Gorenje',
  'Haier',
  'Hansa',
  'Hotpoint',
  'Indesit',
  'Korting',
  'LG',
  'Midea',
  'Miele',
  'Samsung',
  'Siemens',
  'Smeg',
  'Vestel',
  'Whirlpool',
  'Zanussi'
]

const services = [
  {
    title: 'Барабан не крутится',
    desc: 'Проверим ремень, мотор и электронику. Объясним простыми словами, что именно сломалось.',
    price: 'от 1200 ?'
  },
  {
    title: 'Не сливает воду',
    desc: 'Чистим фильтр, проверяем помпу и шланги. Часто решаем за один визит.',
    price: 'от 1000 ?'
  },
  {
    title: 'Сильно шумит или стучит',
    desc: 'Диагностика амортизаторов, подшипников и крестовины.',
    price: 'от 1500 ?'
  },
  {
    title: 'Не набирает воду',
    desc: 'Проверим клапан, прессостат и модуль управления.',
    price: 'от 1100 ?'
  },
  {
    title: 'Не греет воду',
    desc: 'Диагностика ТЭНа и датчиков температуры.',
    price: 'от 1300 ?'
  },
  {
    title: 'Посудомойка плохо моет',
    desc: 'Чистка форсунок, фильтров, проверка нагрева и подачи воды.',
    price: 'от 1000 ?'
  }
]

const steps = [
  { title: 'Заявка', text: 'Звонок или сообщение в Telegram.' },
  { title: 'Диагностика', text: 'Мастер приезжает и объясняет причину поломки.' },
  { title: 'Ремонт', text: 'Согласуем стоимость и делаем ремонт на месте.' },
  { title: 'Гарантия', text: 'Даем гарантию 1 год на работу.' }
]

const reviews = [
  {
    name: 'Светлана П.',
    text: 'Барабан не крутился. Мастер всё показал, заменил ремень. Теперь работает тихо.',
    repair: 'Замена ремня',
    city: 'Химки'
  },
  {
    name: 'Игорь К.',
    text: 'Посудомойка не сливала воду. Почистили фильтр и помпу — всё стало отлично.',
    repair: 'Чистка помпы',
    city: 'Мытищи'
  },
  {
    name: 'Марина Л.',
    text: 'Шумела машинка. Поменяли подшипники, мастер вежливый и аккуратный.',
    repair: 'Замена подшипников',
    city: 'Москва'
  },
  {
    name: 'Андрей С.',
    text: 'Не грелась вода. Приехали в тот же день, всё сделали быстро.',
    repair: 'Замена ТЭНа',
    city: 'Королев'
  }
]

const team = [
  { name: 'Олег Матвеев', role: 'Стиральные машины', exp: '12 лет опыта' },
  { name: 'Ирина Котова', role: 'Посудомоечные машины', exp: '9 лет опыта' },
  { name: 'Денис Горшков', role: 'Электроника и модули', exp: '14 лет опыта' }
]

const reviewSlides = [...reviews, ...reviews]

function App() {
  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">Ремонт.Мойка</div>
          <div className="nav-links">
            <a href="#services">Услуги</a>
            <a href="#brands">Бренды</a>
            <a href="#reviews">Отзывы</a>
            <a href="#team">Мастера</a>
            <a href="#contact">Контакты</a>
          </div>
          <a className="nav-cta" href="#contact">Вызвать мастера</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Стиральные и посудомоечные машины</p>
            <h1>
              Ремонт по‑взрослому —
              <span> быстро, честно, с гарантией</span>
            </h1>
            <p className="lead">
              Приезжаем в день обращения, объясняем простыми словами, что сломалось,
              и сразу озвучиваем стоимость.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Вызвать мастера</a>
              <a className="button ghost" href="#services">Смотреть услуги</a>
            </div>
            <div className="hero-badges">
              <div>
                <strong>30–60 минут</strong>
                <span>среднее время диагностики</span>
              </div>
              <div>
                <strong>от 1000 ?</strong>
                <span>стоимость ремонта</span>
              </div>
              <div>
                <strong>1 год</strong>
                <span>гарантия на работу</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-photo" aria-hidden="true" />
            <div className="hero-card-content">
              <h3>Бесплатная консультация</h3>
              <p>Подскажем по телефону или в чате, что можно сделать до приезда мастера.</p>
              <div className="mini-list">
                <span>WhatsApp</span>
                <span>Telegram</span>
                <span>Звонок</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="services">
        <div className="section-head">
          <h2>Услуги и цены</h2>
          <p>Говорим по-простому: что сломалось, сколько стоит и сколько займет времени.</p>
        </div>
        <div className="cards">
          {services.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="price">{item.price}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section steps">
        <div className="section-head">
          <h2>Как проходит ремонт</h2>
          <p>Прозрачный процесс, никаких сюрпризов по цене.</p>
        </div>
        <div className="step-grid">
          {steps.map((step, index) => (
            <div key={step.title} className="step">
              <div className="step-index">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section brands" id="brands">
        <div className="section-head">
          <h2>Ремонтируем все популярные бренды</h2>
          <p>Запчасти и опыт под любые модели — от бюджетных до премиум.</p>
        </div>
        <div className="brand-cloud">
          {brands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="section-head">
          <h2>Отзывы с фото после ремонта</h2>
          <p>Клиенты видят результат и доверяют. Ниже — реальные случаи работ.</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {reviewSlides.map((review, index) => (
              <article key={`${review.name}-${index}`} className="review">
                <div className="review-photo" aria-hidden="true" />
                <div className="review-body">
                  <div className="review-header">
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.city}</span>
                    </div>
                    <div className="review-chip">{review.repair}</div>
                  </div>
                  <p>{review.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section team" id="team">
        <div className="section-head">
          <h2>Мастера, которым доверяют</h2>
          <p>Фотографии и специализация — чтобы вы знали, кто приедет на ремонт.</p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-photo" aria-hidden="true" />
              <div>
                <h3>{member.name}</h3>
                <p className="muted">{member.role}</p>
                <div className="pill">{member.exp}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="section-head">
          <h2>Обратная связь</h2>
          <p>Опишите, что не работает, и мы уточним детали в удобном формате.</p>
        </div>
        <div className="contact-grid">
          <form className="contact-form">
            <label>
              Имя
              <input type="text" placeholder="Например, Анна" />
            </label>
            <label>
              Телефон
              <input type="tel" placeholder="+7 (___) ___-__-__" />
            </label>
            <label>
              Что не работает
              <textarea rows="4" placeholder="Опишите проблему простыми словами" />
            </label>
            <button className="button primary" type="button">Отправить заявку</button>
            <p className="form-note">Перезвоним в течение 15 минут.</p>
          </form>
          <div className="contact-info">
            <div className="info-card">
              <h3>Свяжитесь как удобно</h3>
              <ul>
                <li>Телефон: +7 (999) 123-45-67</li>
                <li>WhatsApp: +7 (999) 123-45-67</li>
                <li>Telegram: @remontmoyka</li>
                <li>Email: help@remontmoyka.ru</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Работаем по району</h3>
              <p>Москва и ближайшее Подмосковье. Выезд в удобное время.</p>
              <div className="pill">Ежедневно 8:00–22:00</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Ремонт.Мойка</strong>
          <p>Сервис ремонта стиральных и посудомоечных машин.</p>
        </div>
        <div>
          <p>Официальный договор и гарантия.</p>
          <p><a href="/review/">Оставить отзыв</a></p>
          <p>© 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default App

