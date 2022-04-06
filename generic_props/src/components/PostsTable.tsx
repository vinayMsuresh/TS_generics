import React from 'react'
import { Posts } from './posts';
import Head from './Head';
import Row from './Row';
interface Props<T>{
    posts: Posts<T>[];
}

function PostsTable<T extends {}>({posts}:Props<T>) {
  return (
    <table>
        <Head />
        <tbody>
            {
                posts.map(post=> (
                    <Row
                    key={post.id}
                    title={post.title}
                    body = {post.body}
                    />
                ))
            }
        </tbody>
    </table>
  )
}

export default PostsTable