import { Button , Image , Text , VStack} from '@chakra-ui/react'
import React from 'react'

const Card = ({amount , img , checkoutHandler}) => {
  return (
    <VStack m={["1vh","10vh"]}>
        <Image src={img} height={["60vw" , ["50vh"]]}/>
            <Text>₹{amount}</Text>
        <Button onClick={()=>checkoutHandler(amount)}>Buy Now</Button>
    </VStack>
  )
}

export default Card
