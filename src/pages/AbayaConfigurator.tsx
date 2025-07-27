import React, { useState } from 'react';
import { Image } from '../components';
import { placeholderImages } from '../imageUtils';

interface AbayaConfiguratorProps {
  onSave: (design: any) => void;
}

const AbayaConfigurator: React.FC<AbayaConfiguratorProps> = ({ onSave }) => {
  const [design, setDesign] = useState({
    style: 'classic',
    length: 'full',
    sleeves: 'long',
    fabric: 'cotton',
    color: '#000000',
    embroidery: 'none',
    size: 'medium',
    price: 100,
  });

  const handleDesignChange = (field: string, value: any) => {
    setDesign(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveDesign = () => {
    // Save design to Supabase
    onSave(design);
  };

  return (
    <div className="abaya-configurator">
      <section className="configurator-hero">
        <h1>Customize Your Abaya</h1>
        <p>Create a unique abaya that fits your style and needs</p>
      </section>

      <section className="configurator-options">
        <div
          className="configurator-image"
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '24px',
          }}
        >
          <Image
            src={placeholderImages.product}
            alt="Custom Abaya"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </div>

        <div
          className="configurator-form"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '24px',
          }}
        >
          <div
            className="form-group"
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
              }}
            >
              Style
            </label>
            <select
              value={design.style}
              onChange={(e) => handleDesignChange('style', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            >
              <option value="classic">Classic</option>
              <option value="modern">Modern</option>
              <option value="casual">Casual</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          <div
            className="form-group"
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
              }}
            >
              Length
            </label>
            <select
              value={design.length}
              onChange={(e) => handleDesignChange('length', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            >
              <option value="full">Full Length</option>
              <option value="mid">Mid Length</option>
              <option value="short">Short Length</option>
            </select>
          </div>

          <div
            className="form-group"
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
              }}
            >
              Sleeves
            </label>
            <select
              value={design.sleeves}
              onChange={(e) => handleDesignChange('sleeves', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            >
              <option value="long">Long Sleeves</option>
              <option value="short">Short Sleeves</option>
              <option value="sleeveless">Sleeveless</option>
              <option value="3/4">3/4 Sleeves</option>
            </select>
          </div>

          <div
            className="form-group"
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
              }}
            >
              Fabric
            </label>
            <select
              value={design.fabric}
              onChange={(e) => handleDesignChange('fabric', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            >
              <option value="cotton">Cotton</option>
              <option value="silk">Silk</option>
              <option value="polyester">Polyester</option>
              <option value="chiffon">Chiffon</option>
              <option value="velvet">Velvet</option>
            </select>
          </div>

          <div
            className="form-group"
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
              }}
            >
              Color
            </label>
            <input
              type="color"
              value={design.color}
              onChange={(e) => handleDesignChange('color', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            />
          </div>

          <div
            className="form-group"
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
              }}
            >
              Embroidery
            </label>
            <select
              value={design.embroidery}
              onChange={(e) => handleDesignChange('embroidery', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            >
              <option value="none">None</option>
              <option value="simple">Simple</option>
              <option value="medium">Medium</option>
              <option value="complex">Complex</option>
            </select>
          </div>

          <div
            className="form-group"
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
              }}
            >
              Size
            </label>
            <select
              value={design.size}
              onChange={(e) => handleDesignChange('size', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            >
              <option value="extra-small">Extra Small</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </div>

          <div
            className="form-group"
            style={{
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
              }}
            >
              Additional Notes
            </label>
            <textarea
              rows={4}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                resize: 'vertical',
              }}
            />
          </div>

          <div
            className="configurator-price"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              Total Price: ${design.price.toFixed(2)}
            </span>
            <button
              onClick={handleSaveDesign}
              style={{
                padding: '12px 24px',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Save Design
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbayaConfigurator;
