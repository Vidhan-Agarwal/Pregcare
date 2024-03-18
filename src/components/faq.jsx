import React, { useState } from "react";
import "./flashcard.css";
const questions = [
    {
    id: 1295,
    question: "What should I include in my prenatal diet?",
    answer: "A balanced prenatal diet should include a variety of fruits, vegetables, whole grains, lean proteins, and dairy products. It's essential to consume foods rich in essential nutrients such as folic acid, calcium, iron, and omega-3 fatty acids. Avoid raw or undercooked meats, unpasteurized dairy products, and excessive caffeine.",
  },
    {
    id: 5785,
    question: " Is it safe to exercise during pregnancy?",
    answer: " Yes, in most cases, exercise during pregnancy is safe and beneficial. Low-impact activities such as walking, swimming, and prenatal yoga can help maintain fitness, manage weight gain, and reduce discomfort. Always consult with your healthcare provider before starting or continuing any exercise routine during pregnancy.",
  }, 
    {
    id: 6785,
    question: "What are some common discomforts during pregnancy, and how can I manage them?",
    answer: "Common discomforts during pregnancy include nausea, back pain, fatigue, and heartburn. Managing these symptoms may involve eating small, frequent meals, practicing good posture, getting adequate rest, and using techniques such as prenatal massage or warm baths. Always consult with your healthcare provider before taking any medications or supplements.",
  },
     {
    id: 9485,
    question: "When should I start prenatal care, and how often should I see my healthcare provider?",
    answer: " It's recommended to start prenatal care as soon as you know you're pregnant or suspect you might be. Your healthcare provider will schedule regular prenatal check-ups, typically once a month in the first trimester, every two weeks in the second trimester, and weekly in the third trimester, but this schedule may vary based on individual needs.",
  },
    {
    id: 9457,
    question: "What prenatal tests are recommended during pregnancy?",
    answer: " Prenatal tests may include ultrasound scans, blood tests, and genetic screening. These tests help monitor the health and development of the baby, screen for genetic conditions, and identify any potential complications. Your healthcare provider will discuss which tests are recommended based on your medical history and risk factors.",
  },
    {
    id: 3457,
    question: "How can I prepare for childbirth??",
    answer: "Preparation for childbirth involves attending prenatal classes, creating a birth plan, discussing pain management options with your healthcare provider, and packing a hospital bag with essentials. It's also important to stay informed about the stages of labor and delivery and to ask any questions or address concerns with your healthcare team.",
  },
  {
    id: 8832,
    question: "Can I travel during pregnancy?",
    answer: "In most cases, traveling during pregnancy is safe, especially in the second trimester when discomfort and risk of complications are generally lower. However, it's important to consult with your healthcare provider before making any travel plans, especially for long distances or to destinations with potential health risks.",
  },
  {
    id: 1297,
    question: "What are the signs of preterm labor, and when should I seek medical attention?",
    answer: "Signs of preterm labor may include regular contractions, lower back pain, pelvic pressure, vaginal bleeding, or a change in vaginal discharge. If you experience any of these symptoms before 37 weeks of pregnancy, it's crucial to contact your healthcare provider or go to the hospital immediately.",
  },
  {
    id: 9103,
    question: "How can I support my emotional well-being during pregnancy?",
    answer: "Supporting emotional well-being during pregnancy involves seeking support from loved ones, practicing relaxation techniques such as deep breathing or meditation, staying physically active, and seeking professional help if experiencing symptoms of anxiety or depression.",
  },
  {
    id: 2002,
    question:
      "What should I expect during the postpartum period?",
    answer: "The postpartum period, often referred to as the \"fourth trimester,\" involves physical and emotional changes as your body recovers from childbirth and adjusts to caring for a newborn. Expect changes in sleep patterns, hormonal fluctuations, and physical recovery. It's essential to prioritize self-care, accept help from others, and seek support from healthcare providers if needed.",
  },
];

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}