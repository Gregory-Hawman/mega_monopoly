import React from 'react';
import Grid from './Grid';

export default function SingleBoard() {
  const grid = Grid()

  return (
    <div>
      {grid.map((row, index) => {
        if (row[0 + 1] === 0) {
          return (
            <div key={index} className='vertical flex'>
              {row.map((cell, index) => {
                if (index === 0){
                  return (
                    <div key={index} className='v-left v-cell border-[1px] border-white w-10'>
                      {cell}
                    </div>
                  )
                } else if (index === 10) {
                  return (
                    <div key={index} className='v-right v-cell border-[1px] border-white w-10'>
                      {cell}
                    </div>
                  )
                } else {
                  return (
                    <div key={index} className='empty-cell  w-[2.55rem]'>
                    
                    </div>
                  )
                }
              })}
            </div>
          )
        } else if (index === 0) {
          return (
            <div key={index} className='horizontal flex'>
              {row.map((cell, index) => {
                if (index === 0 || index === 10) {
                  return (
                    <div key={index} className='h-top corner'>
                      {cell}
                    </div>
                  )
                } else {
                  return (
                    <div key={index} className='h-top h-cell border-[1px] border-white w-8 h-10'>
                      {cell}
                    </div>
                  )
                }
              })}
            </div>
          )
        } else {
          return (
            <div key={index} className='horizontal flex items-end'>
              {row.map((cell, index) => {
                if (index === 0 || index === 10) {
                  return (
                    <div key={index} className='h-bottom corner'>
                      {cell}
                    </div>
                  )
                } else {
                  return (
                    <div key={index} className='h-bottom h-cell border-[1px] border-white w-8 h-10'>
                      {cell}
                    </div>
                  )
                }
              })}
            </div>
          )
        }
      })}
    </div>
  )
}
