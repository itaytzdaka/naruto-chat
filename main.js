"use strict";

let questions = [
    {
        words: ["מה","זה","מנגה"],
        score: [10,10,50],
        replay: `מנגה זהו קומיקס יפני בשחור לבן שסדרת האנימה מבוססת עליו.
        עלילת המנגה מקדימה את עלילת האנימה.`
    },
    {
        words: ["למה","רשום","שהפרק","בעיבוד","הפרק"],
        score: [10,10,20,40,20],
        replay: `ברגע שאנחנו מעלים פרק חדש לגוגל דרייב, לגוגל לוקח זמן לאפשר צפייה ישירה לפרק. לכן רשום שהפרק בעיבוד. תצטרכו להמתין או להוריד.`
    },
    {
        words: ["מה","זה","פילר","פילרים"],
        score: [10,10,50,50],
        replay: `פילרים אלו פרקים שלא קשורים לעלילת המנגה. הפילרים נועדו לשמור על הפער שבין עלילת המנגה והאנימה.`
    },
    {
        words: ["מתי","יוצא","פרק","חדש","יתורגם","יתרגמו","את","הפרק","הפרקים","הבאים","חדשים","יצאו","עולים","יוצאים","ימים","פרקים","עולה","יעלו","כל","זמן","שעה"],
        score: [20,10,30,10,10,10,5,30,30,5,5,10,10,10,5,30,10,10,10,10,10],
        replay: `הפרקים של בורוטו יוצאים כל יום ראשון בשעה 12:00 (שעון קיץ) או 11:00 (שעון חורף) מתורגמים לאנגלית. העבודה שלנו על הפרק תלויה בזמינות חברי הצוות ולכן יכולה לקחת שעות או ימים. לכן, אין יום קבוע לפרסום הפרק מתורגם לעברית. תוכלו לעקוב אחרי ההתקדמות שלנו על ידי מד הפרקים המוצמד לאתר שמתעדכן בזמן אמת ברגע שהסתיים שלב.`
    },
    {
        words: ["מה","זה","קאנון"],
        score: [10,10,50],
        replay: `מנגה קאנון זהו פרק שהוא לא פילר, ומבוסס על העלילה שבמנגה.`
    },
    {
        words: ["פרק","לא","עובד","הפרק","הסרט","סרט","למה","הפרקים","עובדים","אי","אפשר","לראות","פועל","פועלים"],
        score: [30,10,10,30,30,30,30,5,30,10,5,5,10,10,10],
        replay: `אם פרק או סרט בצפייה ישירה לא עובד, נסו להפעיל אותו מאוחר יותר.
        אם זה לא עוזר גם אחרי יום-יומיים, תוכלו להוריד אותו מהטלגרם ולדווח לנו כדי שנטפל בזה.`
    }

];

function send(){
    // event.preventDefault();
    console.log("send start");
    let questionInput=document.getElementById("question");
    let question=questionInput.value;
    question=question.replaceAll(/\?|\!|\,/g,"").split(" ");
    console.log(question);
    search(question);

}


function search(question){
    let replay="";
    let maxScore=0;
    let score=0;

    

    questions.forEach(obj=>{
        console.log("for each obj");
        question.forEach(word => {
            console.log("for each word");
            let index=obj.words.findIndex(ObjWord => ObjWord==word);
            console.log(index);
            if(index>=0){
                score=score+obj.score[index];
            }
        });

        if(score>maxScore){
            maxScore=score;
            replay=obj.replay;
        }
        score=0;
    });

    console.log(maxScore);
    console.log(replay);

    if(maxScore>=50){
        let answer=document.getElementById("answer");
        answer.innerHTML=replay;
    }
}