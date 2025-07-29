

import React, { useState } from 'react';
// Make sure the path is correct; if ImageCard.tsx is in 'src/components', keep as is.
// If the file does not exist, create it as shown below:
import ImageCard from '../components/ImageCard';
import { placeholderImages } from '../imageUtils';
import '../assets/styles/section-pages.css';

const AbayasPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [showConfigurator, setShowConfigurator] = useState(false);
  
  // State for the abaya configurator
  const [design, setDesign] = useState({
    style: 'classic',
    length: 'full',
    sleeves: 'long',
    fabric: 'cotton',
    color: '#000000',
    embroidery: 'none',
    size: 'medium',
    price: 299,
  });

  const handleDesignChange = (field: string, value: any) => {
    setDesign(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveDesign = () => {
    // Save design logic would go here
    alert('تم حفظ تصميم العباية بنجاح!');
    setShowConfigurator(false);
  };

  const abayaImages = [
    {
      id: 1,
      src: placeholderImages.product,
      alt: 'Abaya 1',
      title: 'Classic Abaya',
      description: 'Traditional long-sleeve abaya with elegant design',
      price: '299 SAR',
      category: 'classic',
      isNew: true,
      isFeatured: true
    },
    {
      id: 2,
      src: placeholderImages.product,
      alt: 'Abaya 2',
      title: 'Modern Abaya',
      description: 'Contemporary abaya with modern cuts and styles',
      price: '349 SAR',
      category: 'modern',
      isFeatured: true
    },
    {
      id: 3,
      src: placeholderImages.product,
      alt: 'Abaya 3',
      title: 'Casual Abaya',
      description: 'Comfortable and casual abaya for everyday wear',
      price: '249 SAR',
      category: 'casual'
    },
    {
      id: 4,
      src: placeholderImages.product,
      alt: 'Abaya 4',
      title: 'Embroidered Abaya',
      description: 'Luxurious abaya with intricate embroidery',
      price: '499 SAR',
      category: 'luxury',
      isFeatured: true
    },
    {
      id: 5,
      src: placeholderImages.product,
      alt: 'Abaya 5',
      title: 'Maxi Abaya',
      description: 'Floor-length abaya with flowing silhouette',
      price: '399 SAR',
      category: 'classic',
      isNew: true
    },
    {
      id: 6,
      src: placeholderImages.product,
      alt: 'Abaya 6',
      title: 'Short Abaya',
      description: 'Shorter length abaya for a modern look',
      price: '279 SAR',
      category: 'modern'
    },
    {
      id: 7,
      src: placeholderImages.product,
      alt: 'Abaya 7',
      title: 'Party Abaya',
      description: 'Elegant abaya perfect for special occasions',
      price: '459 SAR',
      category: 'luxury',
      isFeatured: true
    },
    {
      id: 8,
      src: placeholderImages.product,
      alt: 'Abaya 8',
      title: 'Work Abaya',
      description: 'Professional abaya suitable for work environment',
      price: '329 SAR',
      category: 'casual'
    },
  ];

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'classic', name: 'كلاسيك' },
    { id: 'modern', name: 'عصري' },
    { id: 'casual', name: 'عادي' },
    { id: 'luxury', name: 'فاخر' }
  ];

  const filteredAbayas = filter === 'all' 
    ? abayaImages 
    : abayaImages.filter(abaya => abaya.category === filter);

  const featuredAbayas = abayaImages.filter(abaya => abaya.isFeatured);
  const newAbayas = abayaImages.filter(abaya => abaya.isNew);

  return (
    <div className="abayas-page">
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>مجموعة العبايات الراقية</h1>
          <p>اكتشف تشكيلتنا الواسعة من العبايات الأنيقة والمريحة</p>
          <button 
            className="configurator-btn"
            onClick={() => setShowConfigurator(true)}
          >
            صمم عبايتك الخاصة
          </button>
        </div>
      </section>

      {/* Abaya Configurator Modal */}
      {showConfigurator && (
        <div className="configurator-modal">
          <div className="configurator-content">
            <button 
              className="close-configurator"
              onClick={() => setShowConfigurator(false)}
            >
              ×
            </button>
            <h2>صمم عبايتك المخصصة</h2>
            
            <div className="configurator-container">
              <div className="configurator-image">
                <img
                  src={placeholderImages.product}
                  alt="Custom Abaya"
                />
              </div>

              <div className="configurator-form">
                <div className="form-group">
                  <label>النمط</label>
                  <select
                    value={design.style}
                    onChange={(e) => handleDesignChange('style', e.target.value)}
                  >
                    <option value="classic">كلاسيكي</option>
                    <option value="modern">عصري</option>
                    <option value="casual">عادي</option>
                    <option value="luxury">فاخر</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>الطول</label>
                  <select
                    value={design.length}
                    onChange={(e) => handleDesignChange('length', e.target.value)}
                  >
                    <option value="full">طويل كامل</option>
                    <option value="mid">طول متوسط</option>
                    <option value="short">قصير</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>الأكمام</label>
                  <select
                    value={design.sleeves}
                    onChange={(e) => handleDesignChange('sleeves', e.target.value)}
                  >
                    <option value="long">أكمام طويلة</option>
                    <option value="short">أكمام قصيرة</option>
                    <option value="sleeveless">بدون أكمام</option>
                    <option value="3/4">أكمام ثلاثة أرباع</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>القماش</label>
                  <select
                    value={design.fabric}
                    onChange={(e) => handleDesignChange('fabric', e.target.value)}
                  >
                    <option value="cotton">قطن</option>
                    <option value="silk">حرير</option>
                    <option value="polyester">بوليستر</option>
                    <option value="chiffon">شيفون</option>
                    <option value="velvet">مخمل</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>اللون</label>
                  <input
                    type="color"
                    value={design.color}
                    onChange={(e) => handleDesignChange('color', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>الطراز</label>
                  <select
                    value={design.embroidery}
                    onChange={(e) => handleDesignChange('embroidery', e.target.value)}
                  >
                    <option value="none">بدون طراز</option>
                    <option value="simple">بسيط</option>
                    <option value="medium">متوسط</option>
                    <option value="complex">معقد</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>المقاس</label>
                  <select
                    value={design.size}
                    onChange={(e) => handleDesignChange('size', e.target.value)}
                  >
                    <option value="extra-small">صغير جداً</option>
                    <option value="small">صغير</option>
                    <option value="medium">متوسط</option>
                    <option value="large">كبير</option>
                    <option value="extra-large">كبير جداً</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>ملاحظات إضافية</label>
                  <textarea
                    rows={4}
                    placeholder="أدخل أي متطلبات خاصة هنا..."
                  />
                </div>

                <div className="configurator-price">
                  <span>
                    السعر الإجمالي: {design.price} ريال
                  </span>
                </div>

                <button 
                  className="save-design-btn"
                  onClick={handleSaveDesign}
                >
                  حفظ التصميم
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="filter-section">
        <h2>تصفية حسب النوع</h2>
        <div className="filter-buttons">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <h2>تصنيفات العبايات</h2>
        <div className="categories-grid">
          {categories.filter(cat => cat.id !== 'all').map(category => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={placeholderImages.banner} alt={category.name} />
                <div className="category-overlay">
                  <h3>{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <h2>العبايات المميزة</h2>
        <div className="featured-grid">
          {featuredAbayas.map((abaya) => (
            <ImageCard
              key={abaya.id}
              src={abaya.src}
              alt={abaya.alt}
              title={abaya.title}
              description={abaya.description}
              price={abaya.price}
              isFeatured={abaya.isFeatured}
            />
          ))}
        </div>
      </section>

      <section className="new-arrivals-section">
        <h2>الوافدون الجدد</h2>
        <div className="new-arrivals-grid">
          {newAbayas.map((abaya) => (
            <ImageCard
              key={abaya.id}
              src={abaya.src}
              alt={abaya.alt}
              title={abaya.title}
              description={abaya.description}
              price={abaya.price}
              isNew={abaya.isNew}
            />
          ))}
        </div>
      </section>

      <section className="all-products-section">
        <h2>جميع العبايات</h2>
        <div className="products-grid">
          {filteredAbayas.map((abaya) => (
            <ImageCard
              key={abaya.id}
              src={abaya.src}
              alt={abaya.alt}
              title={abaya.title}
              description={abaya.description}
              price={abaya.price}
              isNew={abaya.isNew}
              isFeatured={abaya.isFeatured}
            />
          ))}
        </div>
      </section>

      <section className="collections-section">
        <h2>مجموعاتنا الموسمية</h2>
        <div className="collections-grid">
          <div className="collection-card">
            <div className="collection-image">
              <img src={placeholderImages.banner} alt="مجموعة الربيع" />
              <div className="collection-overlay">
                <h3>مجموعة الربيع</h3>
                <button className="collection-btn">استكشف المجموعة</button>
              </div>
            </div>
          </div>
          <div className="collection-card">
            <div className="collection-image">
              <img src={placeholderImages.banner} alt="مجموعة الصيف" />
              <div className="collection-overlay">
                <h3>مجموعة الصيف</h3>
                <button className="collection-btn">استكشف المجموعة</button>
              </div>
            </div>
          </div>
          <div className="collection-card">
            <div className="collection-image">
              <img src={placeholderImages.banner} alt="مجموعة الخريف" />
              <div className="collection-overlay">
                <h3>مجموعة الخريف</h3>
                <button className="collection-btn">استكشف المجموعة</button>
              </div>
            </div>
          </div>
          <div className="collection-card">
            <div className="collection-image">
              <img src={placeholderImages.banner} alt="مجموعة الشتاء" />
              <div className="collection-overlay">
                <h3>مجموعة الشتاء</h3>
                <button className="collection-btn">استكشف المجموعة</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbayasPage;

