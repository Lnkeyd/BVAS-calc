import { Flex, Text } from '@mantine/core'
import React from 'react'

const Footer = () => {
  return (
    <Flex mt='xl' className="footer">
        <Text ta='left' fs='italic'>
        Калькулятор создан на основе общедоступной информации, для более подробного изучения структуры BVAS v3 можно обратиться к <a href='https://www.mdapp.co/birmingham-vasculitis-activity-score-bvas-v3-calculator-386/' target='_blanc'>онлайн-калькулятору, доступному на MDApp</a>
        </Text>
    </Flex>
  )
}

export default Footer