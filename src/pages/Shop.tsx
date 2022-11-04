import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header/Header';
import { Layout } from '../Layout/Layout';
import '../Assets/styles/shop.scss';
import { DiscountCard } from '../components/discount/DiscountCard';
import { CiSearch } from 'react-icons/ci'
import { Catalogue } from '../components/catalogue/Catalogue';
import { CarouselCard } from '../components/carousel/CarouselCard';
import listIcon from '../Assets/images/menu.svg';
import gridIcon from '../Assets/images/bigMenu.svg';

import axios from 'axios';

interface productDataType {
    id: 1,
    title: '...',
    price: '...',
    category: '...',
    description: '...',
    image: '...'
}

export const Shop: React.FC = () => {

    const [productData, setProductData] = useState<any>();
    const [sortValue, setsortValue] = useState<string | undefined>();

    const getProducts = async () => {
        try {
            const getProductReq = await axios.get('https://fakestoreapi.com/products')
            console.log(getProductReq);
            setProductData(getProductReq.data)
        } catch (error) {
            console.log(error);
        }
    }

    const filterByCategory = async (selectedCategory: string) => {
        if (selectedCategory === "all") {
            getProducts()
        } else {
            try {
                const filteredListReq = await axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                setProductData(filteredListReq.data)
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        sortProducts(sortValue)
    }, [sortValue])


    const sortProducts = async (sortValue: string | undefined) => {
        if (sortValue === "asc" || sortValue === "desc") {
            const sortedList = await axios.get(`https://fakestoreapi.com/products?sort=${sortValue}`)
            setProductData(sortedList.data)
        }
        else if (sortValue === "cheapest") {
            let ascendingList = productData
            let lowToHigh = productData.sort((a: any, b: any) => {
                return a.price - b.price;
            })
            setProductData(lowToHigh);
            console.log(ascendingList);
        }
        else if (sortValue === "expensive") {
            let descendingList = productData
            let highToLow = productData.sort((a: any, b: any) => {
                return b.price - a.price;
            })
            setProductData(highToLow);
            console.log(highToLow);
        }
    }


    const filterBySearch = (userInput: string) => {
        if (userInput === "") {
            getProducts()
        } else {
            let filteredList = productData.filter((product: productDataType) => product.title.toLowerCase().includes(userInput.toLowerCase()))
            setProductData(filteredList)
        }
    }

    useEffect(() => {
        getProducts()

        return () => {
        }
    }, [])


    return (
        <>
            <Layout>
                <Header />
                <div className="shop-list-container">
                    <div className='filter-list'>
                        <div className='filter-column price-section'>
                            <span className='column-title'>Price</span>
                            <input type='range' />
                            <div className='filter-range-values'>
                                <span>Range</span>
                                <span>$5-$20</span>
                            </div>
                        </div>

                        <div className='filter-column color-section'>
                            <span className='column-title'>Color</span>
                            <div className='colors-grid'>
                                {Array(8).fill(0).map(() => <div className='color-circle'>
                                </div>)}
                            </div>
                        </div>

                        <div className='filter-column categories-section'>
                            <span className='column-title'>Categories</span>
                            <div className='category-list'>
                                <ul>
                                    <li onClick={() => filterByCategory('all')}><span>all</span><span>{`>`}</span></li>
                                    <li onClick={() => filterByCategory('electronics')}><span>electronics</span><span>{`>`}</span></li>
                                    <li onClick={() => filterByCategory('jewelery')}><span>jewelery</span><span>{`>`}</span></li>
                                    <li onClick={() => filterByCategory("men's clothing")}><span>men's clothing</span><span>{`>`}</span></li>
                                    <li onClick={() => filterByCategory("women's clothing")}><span>women's clothing</span><span>{`>`}</span></li>
                                </ul>
                                <button className='more-btn'>Load more</button>
                            </div>
                        </div>

                        {/* <DiscountCard /> */}
                    </div>

                    <div className='items-container'>
                        <div className='search-bar-container'><input placeholder='Search products' type="text" className="search-bar" onChange={(e) => filterBySearch(e.target.value)} /><i><CiSearch /></i></div>
                        <div className="results-count">
                            <p>
                                Showing 1-{productData?.length} Results
                            </p>

                            <div className="sort-btns">
                                <p>Sort by</p>
                                <div className="select-container">
                                    <select name="Sort values" id="Sort values" onChange={(e) => setsortValue(e.target.value)}>
                                        <option value="asc">ascending</option>
                                        <option value="desc">descending</option>
                                        <option value="expensive">Low to High</option>
                                        <option value="cheapest">High to Low</option>
                                    </select>
                                </div>
                                <div className="sort-help-btns">
                                    <div className="lists">
                                        <img src={listIcon} alt="list icon" />
                                    </div>
                                    <div className="grid">
                                        <img src={gridIcon} alt="grid Icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='items-grid'>
                            {productData?.map((product: any) => <div>
                                <CarouselCard {...product} key={product.key} />
                            </div>)}
                        </div>
                    </div>
                </div>

                <section className="recommended">
                    <div className="section-title">
                        <h2>Recommended for you</h2>
                    </div>
                    <div className="section-grid">
                        {
                            Array(8).fill(0).map((e, key) => <CarouselCard key={key} />)
                        }
                    </div>
                </section>
            </Layout>
        </>
    );
}