// @ts-ignore
import { Category, Form, Question } from "../types/Form";
import RelationshipAdv from "../assets/RelationshipAdv.json";

const RelationshipMenuSimple = Form.new('Relationship Menu (Simple)', [
    Category.new('Commitment', [
        Question.new('Marriage'),
        Question.new('Pregnancy/children together'),
        Question.new('Cohabitation'),
        Question.new('Home ownership'),
        Question.new('Commitment to working through challenges'),
        Question.new('Commitment to relationship maintenance'),
    ]),
    Category.new('Emotional Intimacy', [
        Question.new('Expressing happiness and joy'),
        Question.new('Offering support in hard times'),
        Question.new('Saying "I love you"'),
        Question.new('Sharing stories about past'),
        Question.new('Sharing hopes for future'),
    ]),
    Category.new('Social Integration', [
        Question.new('Meeting children'),
        Question.new('Meeting parents/siblings/extended family'),
        Question.new('Meeting friends'),
        Question.new('Presenting as a couple in public settings'),
        Question.new('Presenting as a couple on social media'),
    ]),
    Category.new('Physical Intimacy', [
        Question.new('Physical affection'),
        Question.new('Kissing'),
        Question.new('Sexual intimacy'),
        Question.new('Orgasms'),
        Question.new('Condom/barrier use'),
    ]),
    Category.new('Communication', [
        Question.new('Daily or frequent check-ins'),
        Question.new('Texting'),
        Question.new('Phone/video calls'),
        Question.new('Discussing work and hobbies'),
        Question.new('Ability to express disagreements or hurt feelings'),
    ]),
    Category.new('Quality Time', [
        Question.new('Regularly scheduled time together'),
        Question.new('Date nights'),
        Question.new('Spending the night'),
        Question.new('Shared hobbies or activities'),
        Question.new('Vacations together as a couple'),
    ]),
    Category.new('Autonomy', [
        Question.new('Balance time together and apart'),
        Question.new('Support to pursue independent interests'),
        Question.new('Maintaining independent friendships'),
        Question.new('Maintaining independent romantic relationships'),
        Question.new('Alone time'),
    ]),
]);

const RelationshipMenuAdvanced = Form.new('Relationship Menu (Advanced)', [
    Category.new('Commitment', [
        Question.new('Marriage'),
        Question.new('Pregnancy/children together'),
        Question.new('Coparenting children from other partnerships'),
        Question.new('Sharing pet(s)'),
        Question.new('Having a key'),
        Question.new('Cohabitation'),
        Question.new('Home ownership'),
        Question.new('Prioritization over other partners'),
        Question.new('Relationship labels'),
        Question.new('Planning for future'),
        Question.new('Expectation of long term involvement'),
        Question.new('Commitment to working through chanenges'),
        Question.new('Commitment to relationship maintenance'),
        Question.new('Power of attorney/wills'),
        Question.new('Support through health challenges')
    ]),
    Category.new('Emotional Intimacy', [
        Question.new('Expressing happiness and joy'),
        Question.new('Offering support in hard times'),
        Question.new('Sharing vulnerable feelings'),
        Question.new('Saying "I love you"'),
        Question.new('Sharing stories about past'),
        Question.new('Sharing hopes for future'),
        Question.new('Knowing personal likes/dislikes (eg fav foods)'),
        Question.new('Using pet names'),
        Question.new('Sharing about mental health challenges'),
        Question.new('Supporting mental health work'),
    ]),
    Category.new('Social Integration', [
        Question.new('Meeting metamours (partners’ other partners)'),
        Question.new('Meeting children'),
        Question.new('Meeting parents/siblings/extended family'),
        Question.new('Meeting friends'),
        Question.new('Spending time as a couple with friends/family'),
        Question.new('Positive relationships with metamors'),
        Question.new('Serving as +1 for social events'),
        Question.new('Presenting as a couple in public settings'),
        Question.new('Following on social media'),
        Question.new('Presenting as a couple on social media'),
        Question.new('Presenting as a couple in professional settings'),
        Question.new('Joint vacations with family/metamors')
    ]),
    Category.new('Physical Intimacy', [
        Question.new('Physical affection'),
        Question.new('PDA'),
        Question.new('Compatible sex drives'),
        Question.new('Sexual chemistry'),
        Question.new('Orgasms'),
        Question.new('Kissing'),
        Question.new('Oral sex'),
        Question.new('Manual sex (fingering)'),
        Question.new('Mutual masturbation'),
        Question.new('Penetration/PIV'),
        Question.new('Using sex toys'),
        Question.new('Condom/barrier use'),
        Question.new('Regular STI testing'),
        Question.new('Kinky stuff'),
        Question.new('Threesomes or group sex')
    ]),
    Category.new('Communication', [
        Question.new('Daily or frequent check-ins'),
        Question.new('Texting'),
        Question.new('Phone/video calls'),
        Question.new('Discussing work and hobbies'),
        Question.new('Discussing family, partners, relationships'),
        Question.new('Discussing politics and current events'),
        Question.new('Ability to express disagreements or hurt feelings'),
        Question.new('Ability to address and resolve conflict'),
        Question.new('Radical honesty')
    ]),
    Category.new('Financial Management', [
        Question.new('Shared bank account(s)'),
        Question.new('Mutual contributions to activities'),
        Question.new('Financial support'),
        Question.new('Large gifts'),
        Question.new('Complete financial integration')
    ]),
    Category.new('Quality Time', [
        Question.new('Regularly scheduled time together'),
        Question.new('Date nights'),
        Question.new('Spending the night'),
        Question.new('Shared hobbies or activities'),
        Question.new('Vacations together as a couple'),
        Question.new('Calendar management/integration')
    ]),
    Category.new('Autonomy', [
        Question.new('Balance time together and apart'),
        Question.new('Support to pursue independent interests'),
        Question.new('Maintaining independent friendships'),
        Question.new('Maintaining independent romantic relationships'),
        Question.new('Equal distribution of relationship power'),
        Question.new('Alone time')
    ]),
]);

const PenAndPaperTemplate = Form.new('Pen and Paper Preferences', [
    Category.new('Frequency', [
        Question.new('Dayily Games'),
        Question.new('Weekly Games'),
        Question.new('Bi-weekly Games'),
        Question.new('Monthly Games'),
        Question.new('Regular Sessions'),
        Question.new('Irregular Sessions'),
    ]),
    Category.new('Session Length', [
        Question.new('Short (1-2 hours)'),
        Question.new('Medium (3-4 hours)'),
        Question.new('Long (5+ hours)'),
    ]),
    Category.new('Play Style', [
        Question.new('Theater of the Mind'),
        Question.new('Haptic/Physical Props'),
        Question.new('Narrative'),
        Question.new('Performative'),
        Question.new('Simulationist'),
        Question.new('Competitive / Min-Maxing'),
        Question.new('Cooperative / Group Storytelling'),
    ]),
    Category.new('Game Type', [
        Question.new('Combat'),
        Question.new('Roleplay'),
        Question.new('Exploration'),
        Question.new('Social'),
        Question.new('Puzzle'),
        Question.new('Mystery'),
        Question.new('Horror'),
        Question.new('Sandbox'),
        Question.new('Linear'),
        Question.new('Open World'),
    ]),
    Category.new('Game Tone', [
        Question.new('Serious'),
        Question.new('Silly'),
        Question.new('Dark'),
        Question.new('Light'),
        Question.new('Mature'),
        Question.new('Family Friendly'),
        Question.new('Adults Only'),
    ]),
    Category.new('Game Setting', [
        Question.new('High Fantasy'),
        Question.new('Low Fantasy'),
        Question.new('Modern'),
        Question.new('Historical'),
        Question.new('Sci-Fi'),
        Question.new('Post-Apocalyptic'),
        Question.new('Other'),
    ])
]);



const Empty = Form.new('New Form', [])
//@ts-ignore
const RelationshipMenu = Form.fromPOJO(RelationshipAdv);

export default [
    { id: 'empty', name: 'Empty', template: Empty },
    { id: 'pnp', name: 'PnP Preferences', template: PenAndPaperTemplate },
    { id: 'rel_simp', name: 'Simp. Relationship', template: RelationshipMenuSimple },
    { id: 'rel_adv', name: 'Adv. Relationship', template: RelationshipMenuAdvanced },
];