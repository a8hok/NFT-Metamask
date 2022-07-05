import axios from 'axios'
import React, {useState, useEffect} from 'react'
import priceImg from '../eth.png'

const collectionAddress = "0x446FF91d38bb377654361693CCDa5B23f7Fc03cE";


interface Collection {
    id: number,
    image_thumbnail_url: string,
    name: string,
    traits: [
       {
           value: number }
    ]
}

function NftCollection() {
    const [data, setData] = useState<Collection[]>([]);
    useEffect(() => {
        const fetchNftData = async () => {
            try {
                const openSeaData = await axios.get(`https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=${collectionAddress}&order_direction=desc`)
                setData(openSeaData.data.assets)
            } catch(err) {
                console.log(err)
            }
        }
        fetchNftData();
    }, [])
    return (
        <>
            <div className="container">
                { 
                    data.length > 0 && data.map(obj => 
                        <div key={obj.id}> 
                            <div>
                                <img src={obj.image_thumbnail_url}></img>
                            </div>
                            <div className="name--container">
                                <span>{obj.name}</span>
                            </div>
                            <div className="img--container">
                                <img src={priceImg}></img>
                                <span>{obj.traits[0]?.value}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default NftCollection
