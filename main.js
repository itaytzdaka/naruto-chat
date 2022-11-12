"use strict";

let questions = [
    {
        words: ["איפה","הפרקים","פרקים","של","נארוטו","170","171","220","119","עד","למה","אין","את","חסרים","מופיעים","לא","מ171","מ-171","מ-170","מ170","בנארוטו","170-220","171-219"],
        score: [20,10,10,10,10,40,40,40,40,20,10,20,10,20,30,10,40,40,40,40,20,40,40],
        replay: `לא סיימנו לתרגם את נארוטו פארט 1, עצרנו בפרק 170.
        פרקים אלה הם פילרים וניתן לדלג עליהם ולהמשיך לצפות בפרק 220 מדקה 11:40 ואז לעבור לשיפודן.`
    },
    {
        words: ["איכות","צפייה","נוראית","הצפייה","באיכות","לא","טובה","למה","גרועה","האיכות"],
        score: [40,30,20,30,40,10,10,10,20,40],
        replay: `כאשר אנחנו מעלים פרק חדש, לגוגל לוקח זמן לאפשר צפייה בפרק באיכות גבוהה ומקסימלית של 1080P. עליכם להוריד את הפרק או להמתין.
        אם מדובר בפרקים ישנים של נארוטו, אז האיכות ששודרה פעם הייתה נמוכה ולכן זה ככה.`
    },
    {
        words: ["פרסומות","הנטאי","סוטות","למה","יש","לא","צנועות","הפרסומות","איך","מסירים","מעיפים","מודעות","פרסומת","מודעה","פירסומות","וירוסים","וירוס","סקס","בצפייה","הישירה","פורנו"],
        score: [40,20,20,5,5,5,5,40,5,5,5,40,40,40,40,20,20,20,5,5,20],
        replay: `אנחנו משתמשים בשרת צפייה חינמי עבור הצפייה הישירה, והשרת הזה מגיע עם פרסומות. התקינו חוסם פרסומות כדי שהן לא יופיעו במהלך הצפייה.`
    },
    {
        words: ["אין","קול","בפרק","סאונד","שומעים","לא","שמע","אודיו","למה","בפרקים","לשמוע"],
        score: [20,40,10,40,40,10,40,40,10,10,20],
        replay: `כנראה שהפרק שהורדתם מופעל עם נגן שלא יודע לנגן את הקול של הפרק.
        התקינו נגן VLC או נגן MPC במחשב שלכם והפעילו את הפרק משם.`
    },
    {
        words: ["מה","זה","מנגה"],
        score: [10,10,50],
        replay: `מנגה זהו קומיקס יפני בשחור לבן שסדרת האנימה מבוססת עליו.
        עלילת המנגה מקדימה את עלילת האנימה.`
    },
    {
        words: ["להצטרף","איך","לצוות","אפשר","אני","יכול","מצטרפים"],
        score: [40,10,20,10,10,10,40],
        replay: `תוכלו לבקש להצטרף לצוות על ידי פניה דרך הטלגרם/פייסבוק.`
    },
    {
        words: ["באיזה","סדר","לצפות","בנארוטו","לראות","את","איזה","מה","הסדר","הצפייה","של","נארוטו"],
        score: [10,40,20,10,20,10,10,10,40,20,10,20],
        replay: `קודם לצפות בנארוטו, אחר כך נארוטו שיפודן, ואחר כך בורוטו.
        יש עמוד באתר שמסביר מתי לצפות בסרטים.`
    },
    {
        words: ["אתם","מרוויחים","כסף","על","עבודתכם","התרגום","מקבלים","מהתרגום"],
        score: [20,30,30,10,10,10,10,10],
        replay: `לא. אנחנו לא מרוויחים על עבודתנו כלום.`
    },
    {
        words: ["אתם","מקבלים","תרומות","לתת","לכם","אפשר","לתרום","אני","יכול"],
        score: [20,10,40,10,10,10,40,10,10],
        replay: `כן. יש לכם אפשרות לתרום דרך העמוד הראשי של האתר.`
    },
    {
        words: ["למה","רשום","שהפרק","בעיבוד","הפרק","כתוב"],
        score: [10,10,20,60,20,10],
        replay: `ברגע שאנחנו מעלים פרק חדש לגוגל דרייב, לגוגל לוקח זמן לאפשר צפייה ישירה לפרק. לכן רשום שהפרק בעיבוד. תצטרכו להמתין או להוריד.`
    },
    {
        words: ["מה","זה","פילר","פילרים","למה"],
        score: [10,10,50,50,10],
        replay: `פילרים אלו פרקים שלא קשורים לעלילת המנגה. הפילרים נועדו לשמור על הפער שבין עלילת המנגה והאנימה.`
    },
    {
        words: ["כדאי","מומלץ","לצפות","בנארוטו","יש","טעם","לראות","1","פארט","נארוטו","שווה","האם"],
        score: [20,20,20,20,10,10,20,10,10,20,20,10],
        replay: `בטח! אני סדרה מעולה דאטביו!`
    },
    {
        words: ["כדאי","מומלץ","לצפות","בבורוטו","יש","טעם","לראות","שווה","האם","בורוטו"],
        score: [20,20,20,30,10,10,20,20,10,30],
        replay: `בורוטו לא יצא מוצלח כמוני, צפו אם משעמם לכם, או אם בא לכם לראות אותי עוד על המסך!`
    },
    {
        words: ["מה","זה","טורנט"],
        score: [20,20,20],
        replay: `טורנט זו תוכנה המאפשרת להוריד ולשתף קבצים. צריך להוריד ולהתקין אותה בשביל להשתמש בה.`
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
        words: ["יש","צפייה","בנארוטו","דרך","גוגל","דרייב","אפשר","לצפות","עם","אפשרות","בדרייב","בגוגל","נארוטו","לראות","למה","אין","את","הפרקים","פרקים"],
        score: [5,20,20,10,20,10,10,20,10,10,20,10,20,10,10,10,10,10,10],
        replay: `ניתן לצפות רק בבורוטו דרך גוגל דרייב. כאשר העלנו את הפרקים של נארוטו לגוגל דרייב הם נחסמו.`
    },
    {
        words: ["פרק","לא","עובד","הפרק","הסרט","סרט","למה","הפרקים","עובדים","אי","אפשר","לראות","פועל","פועלים"],
        score: [30,10,10,30,30,30,30,5,30,10,5,5,10,10,10],
        replay: `אם פרק או סרט בצפייה ישירה לא עובד, נסו להפעיל אותו מאוחר יותר.
        אם זה לא עובד גם אחרי יום-יומיים, תוכלו להוריד אותו מהטלגרם ולדווח לנו כדי שנטפל בזה.`
    },
    {
        words: ["מתי","לצפות","בסרטים","צריך","כדאי","מומלץ"],
        score: [10,10,30,10,10,10],
        replay: `יש עמוד באתר שמסביר מתי לצפות בסרטים.`
    },
    {
        words: ["מתי","לצפות","לראות","בסרט","הראשון","של","נארוטו","נסיכת","השלג","את","הסרט"],
        score: [10,10,10,20,10,5,20,25,25,10,10],
        replay: `מומלץ לצפות בסרט הראשון של נארוטו - נסיכת השלג, רק לאחר שהגעתם לפרק 96 בנארוטו פארט 1.`
    },
    {
        words: ["מתי","לצפות","לראות","בסרט","השני","של","נארוטו","אשליית","הרס","את","הסרט","העולם"],
        score: [10,10,10,20,10,5,20,25,25,10,10,25],
        replay: `מומלץ לצפות בסרט השני של נארוטו - אשליית הרס העולם, רק לאחר שהגעתם לפרק 135 בנארוטו פארט 1.`
    },
    {
        words: ["מתי","לצפות","לראות","בסרט","השלישי","של","נארוטו","שיפודן","קשרים","את","הסרט"],
        score: [10,10,10,20,10,5,10,10,50,10,10],
        replay: `מומלץ לצפות בסרט השלישי של נארוטו שיפודן- קשרים, רק לאחר שהגעתם לפרק 53 ולפני שהגעתם לפרק 113 בנארוטו שיפודן.`
    },
    {
        words: ["מתי","לצפות","לראות","בסרט","הרביעי","של","נארוטו","שיפודן","המגדל","האבוד","את","הסרט"],
        score: [10,10,10,20,10,5,20,20,25,25,10,10],
        replay: `מומלץ לצפות בסרט הרביעי של נארוטו שיפודן- המגדל האבוד, רק לאחר שהגעתם לפרק 118 ולפני שהגעתם לפרק 167 בנארוטו שיפודן.`
    },
    {
        words: ["מתי","לצפות","לראות","בסרט","החמישי","של","נארוטו","שיפודן","כלא","הדם","את","הסרט"],
        score: [10,10,10,20,10,5,20,20,25,25,10,10],
        replay: `מומלץ לראות את הסרט החמישי של נארוטו שיפודן - כלא הדם, רק לאחר שהגעתם לפרק 200 ולפני שהגעתם לפרק 223 בנארוטו שיפודן.`
    },
    {
        words: ["מתי","לצפות","לראות","בסרט","השישי","של","נארוטו","שיפודן","דרך","הדרך","אל","הנינג'ה","הסרט"],
        score: [10,10,10,20,10,5,20,20,25,25,20,25,10,10],
        replay: `מומלץ לראות את הסרט השישי של נארוטו שיפודן - הדרך אל הנינג'ה, ממש לאחר שהגעתם לפרק 256 בנארוטו שיפודן.
        שימו לב שכדאי לצפות בפרק 311 לפני הסרט ובפרק 271 אחרי הסרט כי אלו פרקים הקשורים לסרט.`
    },
    {
        words: ["מתי","לצפות","לראות","בסרט","השביעי","של","נארוטו","שיפודן","האחרון","הדם","את","הסרט"],
        score: [10,10,10,20,10,5,10,10,20,25,10,10],
        replay: `מומלץ לראות את הסרט השביעי של נארוטו שיפודן - האחרון, רק לאחר שהגעתם לפרק 493 בנארוטו שיפודן.`
    },
    {
        words: ["מתי","לצפות","לראות","בסרט","בורוטו","של","את","הסרט"],
        score: [10,10,10,15,15,10,10,15],
        replay: `מומלץ לראות את הסרט של בורוטו, אחרי שסיימתם לצפות בנארוטו שיפודן. העלילה של הסרט מורחבת באנימה של בורוטו, אז לא חובה לצפות בסרט.`
    },
    {
        words: ["כדאי","לדלג","על","הפילרים","מומלץ","האם","אפשר","של","נארוטו","בנארוטו","שיפודן","בפילרים","לצפות","לראות","פילרים","את"],
        score: [10,20,10,30,10,10,10,10,30,30,10,30,10,10,30,10],
        replay: `הפילרים בנארוטו ובנארוטו שיפודן לא קשורים לעלילה, אך מוסיפים מידע על דמויות משנה. לא חובה לצפות בהם אבל מומלץ שכן.`
    },
    {
        words: ["כדאי","לדלג","על","הפילרים","מומלץ","האם","אפשר","של","בורוטו","בבורוטו","בפילרים","לצפות","לראות","פילרים","את"],
        score: [10,20,10,30,10,10,10,10,30,30,30,10,10,30,10],
        replay: `רוב האנימה של בורוטו היא פילרית. אם אתם חושבים לדלג על הפילרים, כבר מומלץ פשוט לקרוא את המנגה של בורוטו.`
    },
];

function send(){
    // event.preventDefault();
    let questionInput=document.getElementById("question");
    let question=questionInput.value;
    question=question.replaceAll(/\?|\!|\,/g,"").split(" ");
    search(question);

}


function search(question){
    let replay="";
    let maxScore=0;
    let score=0;
    let wordsNotMatch=0;
    

    questions.forEach(obj=>{
        question.forEach(word => {
            let index=obj.words.findIndex(ObjWord => ObjWord==word);
            if(index>=0){
                score=score+obj.score[index];
            }
            else{
                wordsNotMatch++;
            }
        });

        score=score-(wordsNotMatch*5);

        if(score>maxScore){
            maxScore=score;
            replay=obj.replay;
        }
        score=0;
        wordsNotMatch=0;
    });

    console.log("maxscore: "+maxScore);


    let answer=document.getElementById("answer");

    if(maxScore>=50){
        answer.innerHTML=replay;
    }

    else{
        answer.innerHTML=`אין לי תשובה לשאלתך`;
    }
}