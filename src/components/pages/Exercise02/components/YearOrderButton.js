import React from 'react'

export const YearOrderButton = ({ toggleDescending, isDescending = true }) => (
    <button onClick={toggleDescending}>Year {isDescending ? 'Descending' : 'Ascending'}</button>
)
