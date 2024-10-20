import React from 'react'
import { useAppDispatch, useAppSelector } from './Redux/hooks/index.ts'

export default function MyComp() {

    const count = useAppSelector((s) => s.counter)
  return (
    <div>
      <h1>MyComp : {count}</h1>
    </div>
  )
}
