"use client";

import Link from "../components/LocalizedLink";
import SearchBox from "../components/SearchBox";
import ProductCard from "../components/ProductCard";
import { ArrowIcon } from "../components/Icons";
import { useLanguage } from "../components/LanguageProvider";
import { categories, products } from "../lib/data";

export default function HomePage() {
  const { t } = useLanguage();
  const previewFaqs = [1, 2, 3].map((number) => ({
    question: t(`home.faq${number}Question`),
    answer: t(`home.faq${number}Answer`),
  }));

  return (
    <>
      <section className="index-hero shell">
        <div className="index-hero-copy">
          <div className="index-issue-line">
            <span>FQ—INDEX / 2026</span>
            <b>{t("home.eyebrow")}</b>
          </div>
          <h1>{t("home.titleLine1")}<br /><em>{t("home.titleLine2")}</em></h1>
          <p>{t("home.intro")}</p>
          <SearchBox />
          <dl className="index-metrics">
            <div><dt>{products.length}</dt><dd>{t("home.catalogShortlist")}</dd></div>
            <div><dt>{categories.length}</dt><dd>{t("home.browseType")}</dd></div>
            <div><dt>05</dt><dd>{t("home.languageEditions")}</dd></div>
          </dl>
        </div>

        <div className="index-contact-sheet" aria-label={t("home.reviewDesk")}>
          <header><span>{t("home.referencePlate")}</span><b>FINDQC</b></header>
          <div className="index-photo-grid">
            <a href={products[0].href} target="_blank" rel="noopener noreferrer" className="index-photo-main">
              <img src={products[0].image} alt={products[0].name} />
              <span>{t("home.primaryLabel")}</span>
            </a>
            <a href={products[1].href} target="_blank" rel="noopener noreferrer">
              <img src={products[1].image} alt={products[1].name} />
              <span>02</span>
            </a>
            <a href={products[2].href} target="_blank" rel="noopener noreferrer">
              <img src={products[2].image} alt={products[2].name} />
              <span>03</span>
            </a>
          </div>
          <footer>
            <span>{t("home.referenceImage")}</span>
            <p>{t("home.featureLinks")}</p>
            <b>↗</b>
          </footer>
        </div>
      </section>

      <section className="index-directory shell">
        <div className="index-section-label">
          <span>{t("home.directoryLabel")}</span>
          <div>
            <small>{t("home.browseType")}</small>
            <h2>{t("home.startCategory")}</h2>
          </div>
          <Link href="/categories">{t("home.allCategories")} <ArrowIcon /></Link>
        </div>
        <div className="index-category-grid">
          {categories.slice(0, 6).map((category, index) => (
            <a href={category.href} target="_blank" rel="noopener noreferrer" key={category.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{t(`category.${category.slug}.name`)}</strong>
                <small>{t(`category.${category.slug}.short`)}</small>
              </div>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </section>

      <section className="index-products section shell">
        <div className="index-section-label">
          <span>{t("home.shortlistLabel")}</span>
          <div>
            <small>{t("home.catalogShortlist")}</small>
            <h2>{t("home.recentFinds")}</h2>
            <p>{t("home.recentIntro")}</p>
          </div>
          <Link href="/products">{t("home.viewAll")} <ArrowIcon /></Link>
        </div>
        <div className="product-grid home-products">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard product={product} priority={index < 2} key={product.id} />
          ))}
        </div>
        <p className="price-note">{t("home.priceNote")}</p>
      </section>

      <section className="index-method shell">
        <div className="index-method-intro">
          <span>{t("home.methodLabel")}</span>
          <h2>{t("home.methodTitle1")}<br />{t("home.methodTitle2")}</h2>
          <p>{t("home.methodIntro")}</p>
          <Link href="/guides/qc-photo-checklist">{t("home.openChecklist")} <ArrowIcon /></Link>
        </div>
        <ol>
          {[1, 2, 3].map((number) => (
            <li key={number}>
              <span>0{number}</span>
              <div>
                <h3>{t(`home.method${number}Title`)}</h3>
                <p>{t(`home.method${number}Text`)}</p>
              </div>
              <b>↗</b>
            </li>
          ))}
        </ol>
      </section>

      <section className="index-reading section shell">
        <div className="index-article">
          <div className="index-article-number">{t("home.fieldNoteLabel")}</div>
          <div>
            <span>{t("home.articleCategory")} · {t("home.articleReadTime")}</span>
            <h2>{t("home.articleTitle")}</h2>
            <p>{t("home.articleExcerpt")}</p>
            <Link href="/articles/before-you-buy-qc-guide">{t("home.readNote")} <ArrowIcon /></Link>
          </div>
          <figure>
            <img src="/products/shoes-60.jpg" alt="QC reference example" />
            <figcaption>{t("home.checkBeforeShip")}</figcaption>
          </figure>
        </div>

        <div className="index-faq">
          <header>
            <span>{t("home.faqLabel")}</span>
            <div><small>{t("home.quickAnswers")}</small><h2>{t("home.beforeClick")}</h2></div>
          </header>
          <div className="faq-list">
            {previewFaqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><i>0{index + 1}</i>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
            <Link href="/faq" className="text-link">{t("home.seeAnswers")} <ArrowIcon /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
