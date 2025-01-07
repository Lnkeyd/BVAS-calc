import { Box, Text } from '@mantine/core'
import React from 'react'

const Result = ({result, answers}) => {
    console.log(result)
    console.log(answers)
  return (
    <Box>
    <Text fw={700} ta='left' style={{width: '400px'}}>
          Результат: {result}
    </Text>
    <Text ta='left' mt='md'>
        ВАЖНО: Данный калькулятор является вспомогательным инструментом и не заменяет консультацию врача. 
        Если у вас выявлены симптомы васкулита или есть повышенные значения BVAS, обязательно обратитесь к специалисту для 
        уточнения диагноза и назначения лечения.
    </Text>
    </Box>
  )
}

export default Result