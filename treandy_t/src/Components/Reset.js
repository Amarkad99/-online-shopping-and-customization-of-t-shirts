import React, { useState } from 'react'
export function Reset()
{
    const [values, setValues] = useState(initialFValues);
    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }
    return(
        resetForm
    )
}