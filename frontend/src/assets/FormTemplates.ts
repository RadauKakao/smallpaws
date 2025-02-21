import { Form } from "../types/Form";
import RelationshipAdv from "../assets/RelationshipAdv.json";

const EmptyTemplate = Form.new('New Form', [])

/*
const RelationshipMenuTemplate = Form.new('Relationship Menu', [
    Category.new('Commitment', [
        Question.new('Marriage'),
        Question.new('Pregnancy/children together'),
        Question.new('Coparenting chidren from other partnerships'),
        Question.new('Sharing pet(s)'),
        Question.new('Havng a key'),
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
    ])
]);*/

const RelationshipMenuTemplate = Form.fromPOJO(RelationshipAdv);

export default [
    { id: 'empty', name: 'Empty', template: EmptyTemplate },
//    { id: 'pnp', name: 'PnP Preferences', template: EmptyTemplate },
//    { id: 'rel_simp', name: 'Relationship', template: EmptyTemplate },
    { id: 'rel_adv', name: 'Adv. Relationship', template: RelationshipMenuTemplate },
];