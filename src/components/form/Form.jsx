import React, { useState } from "react";
import { Button, Checkbox, CheckboxGroup, Flex, Modal, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import Result from "../result/Result";
import './form.css'

const Form = () => {
  const [result, setResult] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const formData = [
    {
      question: "1. Общие симптомы",
      answer: [{title: "Лихорадка ≥38°C", checked: false}, {title: "Потеря веса >2 кг", checked: false}],
      score: ""
    }
  ]

  const form = useForm({
    initialValues: {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
    },
  });

  const submitForm = (values) => {
    console.log(form)
    const score = Object.values(values)
      .flat()
      .reduce((acc, curr) => {
        return (acc += parseInt(Number(curr)));
      }, 0);

    if (score <= 5) setResult(`${score}б. Низкая активность заболевания или ремиссия`);
    if (score >= 6 && score <= 10) setResult(`${score}б. Умеренная активность`);
    if (score > 10)
      setResult(`${score}б. Высокая активность, требующая интенсивного лечения`);

    setTimeout(() => {
      open()
    }, 100)
  };

  function handleFormReset() {
    form.reset()
    setResult("")
  }

  return (
    <div className="form">
      <div className="form-wrapper" onSubmit={form.onSubmit(submitForm)}>
        <h2>Выберите симптомы (при наличии) для каждой категории:</h2>

        <form action="" onReset={handleFormReset}>
          <CheckboxGroup
            label="1. Общие симптомы"
            {...form.getInputProps("question1")}
            mt="md"
          >
            <Checkbox mt="md" value="3.1" label="Лихорадка ≥38°C (3)" />
            <Checkbox mt="sm" value="3.2" label="Потеря веса >2 кг (3)" />
          </CheckboxGroup>

          <CheckboxGroup
            label="2. Кожа"
            {...form.getInputProps("question2")}
            mt="md"
          >
            <Checkbox mt="md" value="3" label="Пурпура (3)" />
            <Checkbox mt="sm" value="6" label="Язвы на коже/гангрена (6)" />
          </CheckboxGroup>

          <CheckboxGroup
            label="3. Слизистые оболочки и глаза"
            {...form.getInputProps("question3")}
            mt="md"
          >
            <Checkbox mt="md" value="3" label="Язвы на слизистых оболочках (3)" />
            <Checkbox mt="sm" value="6" label="Увеит (6)" />
          </CheckboxGroup>

          <CheckboxGroup
            label="4. ЛОР-органы"
            {...form.getInputProps("question4")}
            mt="md"
          >
            <Checkbox
              mt="md"
              value="3"
              label="Эпистаксис (носовое кровотечение), корки или другие воспалительные изменения носа (3)"
            />
            <Checkbox
              mt="sm"
              value="6"
              label="Перфорация носовой перегородки или разрушение костей (например, седловидная деформация носа) (6)"
            />
          </CheckboxGroup>

          <CheckboxGroup
            label="5. Грудная клетка (лёгкие)"
            {...form.getInputProps("question5")}
            mt="md"
          >
            <Checkbox
              mt="md"
              value="3"
              label="Хрипы, одышка или признаки бронхиальной обструкции (3)"
            />
            <Checkbox
              mt="sm"
              value="6"
              label="Лёгочное кровотечение или поражения лёгких (по данным визуализации) (6)"
            />
          </CheckboxGroup>

          <CheckboxGroup
            label="6. Сердечно-сосудистая система"
            {...form.getInputProps("question6")}
            mt="md"
          >
            <Checkbox
              mt="md"
              value="3"
              label="Перемежающаяся хромота (ишемия конечностей) (3)"
            />
            <Checkbox mt="sm" value="6" label="Перикардит (6)"/>
          </CheckboxGroup>

          <CheckboxGroup
            label="7. Брюшная полость"
            {...form.getInputProps("question7")}
            mt="md"
          >
            <Checkbox
              mt="md"
              value="3"
              label="Боль в животе (вызванная ишемией) (3)"
            />
            <Checkbox
              mt="sm"
              value="6"
              label="Желудочно-кишечное кровотечение (гематохезия, мелена) (6)"
            />
          </CheckboxGroup>

          <CheckboxGroup
            label="8. Почки"
            {...form.getInputProps("question8")}
            mt="md"
          >
            <Checkbox mt="md" value="6" label="Гематурия (эритроциты в моче) (6)" />
            <Checkbox
              mt="sm"
              value="9"
              label="Почечная недостаточность (повышение уровня креатинина, снижение скорости клубочковой фильтрации) (9)"
            />
          </CheckboxGroup>

          <CheckboxGroup
            label="9. Нервная система"
            {...form.getInputProps("question9")}
            mt="md"
          >
            <Checkbox
              mt="md"
              value="6"
              label="Мононейропатия (например, поражение одной конечности) (6)"
            />
            <Checkbox
              mt="sm"
              value="9"
              label="Церебральный васкулит (неврологический дефицит, связанный с воспалением сосудов) (9)"
            />
          </CheckboxGroup>

          <Flex direction="column"  style={{maxWidth: "200px", marginLeft: "auto", marginRight: "auto"}} mt="xl" justify="center">
            <Button type="submit">
              Отправить
            </Button>
            <Button type="reset" mt="md" variant="outline">
              Очистить ввод
            </Button>
          </Flex>
        </form>
      </div>
      <Modal centered withinPortal={false} opened={opened} onClose={close} title="Результаты тестирования">
        <Result result={result} answers={form.values}/>
      </Modal>
    </div>
  );
};

export default Form;
