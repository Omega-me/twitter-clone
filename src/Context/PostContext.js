import React, { createContext, useState } from 'react'

export const PostContext = createContext()

export const PostProvider = (props) => {
    const [postChecker, setPostChecker] = useState(false);

    return (
        <PostContext.Provider value={[postChecker, setPostChecker]}>
            {props.children}
        </PostContext.Provider>
    )
}