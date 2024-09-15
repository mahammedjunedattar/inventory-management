'use client';
import React, { useEffect, useState } from 'react';
import Headers from '../components/Headers/page';
import { useRouter } from 'next/navigation';
<<<<<<< HEAD

const Page = () => {
    const router = useRouter();
=======
const Page = () => {
    const router =  useRouter()
>>>>>>> 855b3838141ebb140144301ebeb2420d47c350aa

    const initialFormState = {
        name: '',
        quantity: '',
        price: ''
    };

    const [productForm, setProductForm] = useState(initialFormState);
    const [stock, setStock] = useState([]);
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');
    const [isDropdown, setIsDropdown] = useState(false);
    const [loading, setLoading] = useState(false);
<<<<<<< HEAD
    const [product, displayProduct] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/components/Login');
        }
    }, []);

    const addProduct = async (e) => {
=======
const [product,displayproduct] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            router.push('/components/Login');
        }

    }, []);


    const addProduct = async (e) => {

        
>>>>>>> 855b3838141ebb140144301ebeb2420d47c350aa
        e.preventDefault();
        try {
            const response = await fetch('/apis/mongo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productForm)
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error);
            }

            const result = await response.json();
            displayProduct('Your product has been added successfully');
            setTimeout(() => {
                displayProduct('');
            }, 2000);

            setProductForm(initialFormState);
            fetchStock();
        } catch (error) {
            console.error('Error adding product:', error.message);
        }
    };

    const fetchStock = async () => {
        try {
            const response = await fetch('/apis/mongo', { method: 'GET' });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error);
            }
            const result = await response.json();
            setStock(result);
        } catch (error) {
            console.error('Error fetching stock:', error.message);
        }
    };

    const loggout = () => {
        localStorage.removeItem('token');
<<<<<<< HEAD
        router.push('/components/Login');
    };

    const onChange = (e) => {
=======
        router.push('/components/Login');  // Redirect to login page after logout
    }
        const onChange = (e) => {
>>>>>>> 855b3838141ebb140144301ebeb2420d47c350aa
        setProductForm({ ...productForm, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        fetchStock();
    }, [loading]);

    useEffect(() => {
        if (query.length < 3) {
            setResults([]);
            setIsDropdown(false);
            setLoading(false);
            return;
        }
        const fetchResults = async () => {
            try {
                const res = await fetch(`/apis/search?q=${query}`);
                const data = await res.json();
                setResults(data);
                setIsDropdown(true);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setResults([]);
                setIsDropdown(false);
                setLoading(false);
            }
        };
        setLoading(true);
        fetchResults();
    }, [query]);

    const updateone = async (Action, name, initialQuantity) => {
        const index = results.findIndex((item) => item.name === name);
        const newResults = [...results];

        if (Action === 'plus') {
            newResults[index].quantity = parseInt(initialQuantity) + 1;
        } else {
            newResults[index].quantity = parseInt(initialQuantity) - 1;
        }

        setResults(newResults);

        const stockIndex = stock.findIndex((item) => item.name === name);
        const newStock = [...stock];

        if (Action === 'plus') {
            newStock[stockIndex].quantity = parseInt(initialQuantity) + 1;
        } else {
            newStock[stockIndex].quantity = parseInt(initialQuantity) - 1;
        }

        setStock(newStock);
        setLoading(true);

        const response = await fetch('/apis/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Action, name, initialQuantity })
        });

        setLoading(false);
    };

    return (
        <>
            <Headers logout={loggout} />
<<<<<<< HEAD
            <div className="container mx-auto p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Add a Product</h1>
                <div className="text-green-600 text-center">{product}</div>
=======
            <div className="container  mx-auto p-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Add a Product</h1>
                <div className='text-green-600 text-center'> {product} </div>
>>>>>>> 855b3838141ebb140144301ebeb2420d47c350aa

                <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 flex flex-col sm:flex-row items-center">
                    Search a Product
                    <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:ml-4">
                        <input
                            value={query}
                            name="name"
                            type="text"
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-4"
                        />
                        <select className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="all">All</option>
                            <option value="category1">Category 1</option>
                            <option value="category2">Category 2</option>
                        </select>
                    </div>
                </h1>

                <div>
                    {loading ? (
                        <svg
                            width="40"
                            className="mx-auto"
                            height="40"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="black"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="black"
                                strokeWidth="10"
                                fill="none"
                                strokeDasharray="188.4 62.8"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 50 50"
                                    to="360 50 50"
                                    dur="1s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </svg>
                    ) : (
                        isDropdown && results.length > 0 && (
                            <ul className="bg-white border rounded shadow-md mt-2">
                                {results.map((item) => (
                                    <li
                                        key={item._id}
                                        className="flex justify-between p-2 border-b hover:bg-gray-200"
                                    >
                                        <span>
                                            {item.name} ({item.quantity} available for ₹{item.price})
                                        </span>
                                        <div className="space-x-5 flex">
                                            <button
                                                className="bg-purple-600 p-2 cursor-pointer rounded-xl w-9 text-white"
                                                onClick={() => updateone('plus', item.name, item.quantity)}
                                            >
                                                +
                                            </button>
                                            <span className="font-semibold">{item.quantity}</span>
                                            <button
                                                className="bg-purple-600 p-2 cursor-pointer rounded-xl w-9 text-white"
                                                onClick={() => updateone('minus', item.name, item.quantity)}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    )}
                </div>

                <form className="mt-4 mb-8" onSubmit={addProduct}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Product Name
                        </label>
                        <input
                            onChange={onChange}
                            id="name"
                            name="name"
                            type="text"
                            value={productForm.name}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            onChange={onChange}
                            id="quantity"
                            name="quantity"
                            type="number"
                            value={productForm.quantity}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            onChange={onChange}
                            id="price"
                            name="price"
                            type="number"
                            value={productForm.price}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Product
                    </button>
                </form>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Stock</h1>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">Product</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stock.map((item) => (
                                <tr key={item._id} className="border-b">
                                    <td className="px-4 py-2">{item.name}</td>
                                    <td className="px-4 py-2">{item.quantity}</td>
                                    <td className="px-4 py-2">₹{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Page;
