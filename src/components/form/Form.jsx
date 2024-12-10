import React, { useState } from "react";
import { Button, Checkbox, CheckboxGroup, Modal, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

const Form = () => {
  const [result, setResult] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

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
    const score = Object.values(values)
      .flat()
      .reduce((acc, curr) => {
        return (acc += parseInt(Number(curr)));
      }, 0);

    if (score <= 5) setResult("низкая активность заболевания или ремиссия");
    if (score >= 6 && score <= 10) setResult("умеренная активность");
    if (score > 10)
      setResult("высокая активность, требующая интенсивного лечения");

    setTimeout(() => {
      open()
    }, 100)
  };

  return (
    <>
      <div className="form-wrapper" onSubmit={form.onSubmit(submitForm)}>
        <h2>Выберите симптомы для каждой категории:</h2>

        <form action="">
          <CheckboxGroup
            label="1. Общие симптомы"
            {...form.getInputProps("question1")}
            mt="md"
          >
            <Checkbox mt="md" value="3.1" label="Лихорадка ≥38°C" />
            <Checkbox mt="sm" value="3.2" label="Потеря веса >2 кг" />
          </CheckboxGroup>

          <CheckboxGroup
            label="2. Кожа"
            {...form.getInputProps("question2")}
            mt="md"
          >
            <Checkbox mt="md" value="3" label="Пурпура" />
            <Checkbox mt="sm" value="6" label="Язвы на коже/гангрена" />
          </CheckboxGroup>

          <CheckboxGroup
            label="3. Слизистые оболочки и глаза"
            {...form.getInputProps("question3")}
            mt="md"
          >
            <Checkbox mt="md" value="3" label="Язвы на слизистых оболочках" />
            <Checkbox mt="sm" value="6" label="Увеит" />
          </CheckboxGroup>

          <CheckboxGroup
            label="4. ЛОР-органы"
            {...form.getInputProps("question4")}
            mt="md"
          >
            <Checkbox
              mt="md"
              value="3"
              label="Эпистаксис (носовое кровотечение), корки или другие воспалительные изменения носа"
            />
            <Checkbox
              mt="sm"
              value="6"
              label="Перфорация носовой перегородки или разрушение костей (например, седловидная деформация носа)"
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
              label="Хрипы, одышка или признаки бронхиальной обструкции"
            />
            <Checkbox
              mt="sm"
              value="6"
              label="Лёгочное кровотечение или поражения лёгких (по данным визуализации)"
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
              label="Перемежающаяся хромота (ишемия конечностей)"
            />
            <Checkbox mt="sm" value="6" label="Перикардит" />
          </CheckboxGroup>

          <CheckboxGroup
            label="7. Брюшная полость"
            {...form.getInputProps("question7")}
            mt="md"
          >
            <Checkbox
              mt="md"
              value="3"
              label="Боль в животе (вызванная ишемией)"
            />
            <Checkbox
              mt="sm"
              value="6"
              label="Желудочно-кишечное кровотечение (гематохезия, мелена)"
            />
          </CheckboxGroup>

          <CheckboxGroup
            label="8. Почки"
            {...form.getInputProps("question8")}
            mt="md"
          >
            <Checkbox mt="md" value="6" label="Гематурия (эритроциты в моче)" />
            <Checkbox
              mt="sm"
              value="9"
              label="Почечная недостаточность (повышение уровня креатинина, снижение скорости клубочковой фильтрации)"
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
              label="Мононейропатия (например, поражение одной конечности) "
            />
            <Checkbox
              mt="sm"
              value="9"
              label="Церебральный васкулит (неврологический дефицит, связанный с воспалением сосудов)"
            />
          </CheckboxGroup>

          <Button type="submit" mt="xl">
            Отправить
          </Button>
        </form>
      </div>
      <Modal withinPortal={false} opened={opened} onClose={close} title="Результаты тестирования">
        <Text fw={700} ta='left' style={{width: '400px'}}>
          Результат: {result}
        </Text>
        <Text ta='left' mt='md'>
        ВАЖНО: Данный калькулятор является вспомогательным инструментом и не заменяет консультацию врача. 
        Если у вас выявлены симптомы васкулита или есть повышенные значения BVAS, обязательно обратитесь к специалисту для 
        уточнения диагноза и назначения лечения.
        </Text>
      </Modal>
    </>
  );
};

export default Form;
