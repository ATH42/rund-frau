'use client'
import React, { useState } from 'react'

const BirthCalculator: React.FC = () => {
  const [inputDate, setInputDate] = useState<string>('')
  const [dueDate, setDueDate] = useState<string | null>(null)

  const calculateDueDate = (date: string) => {
    const startDate = new Date(date)
    const dueDate = new Date(startDate)
    dueDate.setDate(startDate.getDate() + 280) // Add 280 days (40 weeks)
    return dueDate.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const handleCalculate = () => {
    if (inputDate) {
      const calculatedDate = calculateDueDate(inputDate)
      setDueDate(calculatedDate)
    }
  }

  return (
    <div className="birth-calculator bg-primary-dark text-white p-4 rounded-lg shadow-md">
      <h2>Geburtsterminrechner</h2>
      <input type="date" value={inputDate} onChange={(e) => setInputDate(e.target.value)} />
      <button onClick={handleCalculate}>Berechnen</button>
      {dueDate && <p>Voraussichtlicher Geburtstermin: {dueDate}</p>}
    </div>
  )
}

export default BirthCalculator
