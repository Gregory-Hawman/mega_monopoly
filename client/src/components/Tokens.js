import React from 'react'

export default function Tokens() {
    const tokenList = ['red', 'yellow', 'green', 'blue']

    return (
        <div>
            {tokenList.map((token, index) => {
                console.log(token)
                return(
                    <div key={index} className={`tokens token-${token}`}>
                    </div>
                )
            })}
        </div>
    )
}
