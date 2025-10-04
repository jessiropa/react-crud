import { useState, useEffect } from "react"
import api from '../../api'
import { Link } from "react-router-dom"
import { useEffectEvent } from "react";

export default function PostIndex() {
    // ini state
    const [posts, setPosts] = useState([]);

    const fetchDataPosts = async()=>{
        await api.get('api/posts')
        .then(response => {
            setPosts(response.data.data.data);
        })
    }

    useEffect(() => {
        fetchDataPosts();
    }, []);
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                 <div className="col-md-12">
                     <Link to="/posts/create" className="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW POST</Link>
                     <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col" style={{ 'width': '15%' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts.length > 0
                                        ?   posts.map((post, index) => (
                                            <tr key={index}>
                                                <td className="text-center">
                                                    <img src={post.img} alt={post.title} width="20" className="rounded"/>
                                                </td>
                                                <td>{ post.title}</td>
                                                <td>{ post.content}</td>
                                                <td className="text-center">
                                                    <Link to={`/posts/edit/${post.id}`} className="btn btn-primary rounded-sm shadow border-0 me-2">Edit</Link>
                                                    <button className="btn btn-sm btn-danger rounded-sm shadow border-0"> Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                        : <tr>
                                            <td colSpan="4" className="text-center">
                                                <div className="alert alert-danger mb-0">
                                                    Data Belum Tersedia!
                                                </div>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    )
}