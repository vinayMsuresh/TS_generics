import React from 'react';
interface Props<T>{
    title:T;
    body:T;
};



function Row <T extends {}> ({title, body}:Props<T>) {
  return (
    <tr>
        <td>{title}</td>
        <td>{body}</td>
    </tr>
  )
}

export default Row