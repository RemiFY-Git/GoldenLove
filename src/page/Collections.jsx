import React, { useEffect, useState } from "react";
import { work } from "../assets/asset"
import ProductItem from "../components/ProductItem";

const Collections = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev =>
        prev.filter(item => item !== e.target.value)
      );
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = [...work];

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      );
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category]);

  useEffect(() => {
    setFilterProducts(work);
  }, []);

  return (
    <section id="collections" className="container mx-auto px-6 py-20">

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <h1 className="text-4xl font-bold text-center text-secondary-foreground mb-10">
        Collections
      </h1>

      <div className="flex flex-col sm:flex-row gap-10">

        <div className="min-w-60">

          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl text-primary cursor-pointer"
          >
            FILTERS
          </p>
          {/* border border-green-300 pl-5 py-3 mt-6
            glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 */}
          <div
            className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 font-medium ">
              CATEGORIES
            </p>

            <div className="flex flex-col gap-2">

              <label className="space">
                <input
                  type="checkbox"
                  value="Logo"
                  onChange={toggleCategory}
                />
                Logo
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Birthday"
                  onChange={toggleCategory}
                />
                Birthday
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Church"
                  onChange={toggleCategory}
                />
                Church
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Party"
                  onChange={toggleCategory}
                />
                Party
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Business"
                  onChange={toggleCategory}
                />
                Business
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Program"
                  onChange={toggleCategory}
                />
                Program
              </label>

            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.map(item => (
              <ProductItem
                key={item._id}
                id={item._id}
                image={item.image}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Collections;