import { Paper, Typography } from '@material-ui/core'
import { includes, map, toLower } from 'lodash'
import React from 'react'

interface Props {
    categories: string[]
    searchingCatChars: string
}

const CategoryDisPlayingTable = (props: Props) => {
    const { categories, searchingCatChars } = props
    console.log('searchingCatChars',searchingCatChars);
    
    return (
        <div
            style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, height: '75vh', overflow: 'scroll' }}>
            {map(categories, cat => (
                includes(toLower(cat), toLower(searchingCatChars)) ?
                    <Paper variant="outlined" style={{ paddingLeft: 20 }}>
                        <Typography>
                            {cat}
                        </Typography>
                    </Paper> : <></>

            ))}
        </div>
    )
}

export default CategoryDisPlayingTable
