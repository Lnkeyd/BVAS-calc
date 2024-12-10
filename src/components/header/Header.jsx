import React from 'react'
import infoIcon from '../../assets/info.svg'
import { Flex, Tooltip } from '@mantine/core'

const Header = () => {
  return (
    <Flex align="center">
      <h1>Калькулятор индекса BVAS</h1>
      <Tooltip position="bottom" offset={{ mainAxis: 20, crossAxis: 0 }} multiline withArrow w={400} label="BVAS (Birmingham Vasculitis Activity Score) — это систематизированный индекс для оценки активности васкулитов. Он используется для количественной оценки тяжести и активности заболевания. Индекс помогает в диагностике, мониторинге динамики болезни и выборе тактики лечения.">
        <img src={infoIcon} alt="info" style={{marginLeft: '20px', cursor: 'pointer'}} />
      </Tooltip>
    </Flex>
  )
}

export default Header