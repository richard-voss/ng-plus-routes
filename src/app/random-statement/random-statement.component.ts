import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'routes-random-statement',
  templateUrl: './random-statement.component.html',
  styleUrls: ['./random-statement.component.scss']
})
export class RandomStatementComponent implements OnInit {

  readonly list = [
    'Have the courage to live a life true to yourself, not the life others expect of you.',
    'Never attribute to malice that which can be adequately explained by stupidity.',
    '“There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.” Ernest Hemingway',
    'Don’t make decisions when you’re angry. Don’t make promises when you’re happy.',
    '“Never argue with a stupid person, they’ll drag you down to their level and beat you with experience.” Mark twain',
    'Only pack what you can carry yourself.',
    'Remember you’ll always regret what you didn’t do rather than what you did.',
    '“You’d worry less about what people think about you if you knew how seldom they do.” David Foster Wallace',
    'If you blame it on someone else, don’t expect it to get better.',
    '“You can be the ripest, juiciest peach in the world, but there will always be someone who hates peaches.” Dita von Teese',
    'If the grass is greener on the other side, there’s probably more manure there.',
    'Don’t give up what you want most for what you want now.',
    'With regards to the opposite sex: If you look hungry, you’ll starve.',
    '“Never let your sense of morals prevent you from doing what is right.” Isaac Asimov',
    'Strive to be the man you want your daughter to marry.',
    '“Remember only enemies speak the truth. Friends and lovers lie endlessly, caught in the web of duty.” Stephen King',
    'Never forget your car keys will change your car from one tonne of inert metal ' +
    'into one of the most deadly killing machines that has been invented.',
    'Wait 24 hours before getting mad and reacting about anything. If it doesn’t bother you in 24 hours time,' +
    ' it probably isn’t important enough to get mad over.',
    'Never make someone a priority who only makes you an option.',
    'Try not to take anything personally. No one thinks about you as much as you do.',
    '“If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.” Sirius Black',
    'Figure out what you love to do, and then figure out how to get someone to pay you to do it.',
    'If you treat a woman like a queen, and she treats you like a jester, your princess is in another castle.',
    'Whenever something happens that makes you sad, ask yourself whether you’d still care about it when you’re ninety.',
    'Be persistent. When knowledge and ability aren’t enough, be persistent.',
    '“Life is scary. Get used to it. There are no magical fixes. It’s all up to you. So get up off your keister,' +
    ' get out of here, and go start doin’ the work. Nothing in this world that’s worth having comes easy.” Bob Kelso',
    'Smart girls like to hear they’re pretty, pretty girls like to hear that they’re smart.',
    'Happiness is a choice and everything else is a matter of perspective.'
  ];

  advice: string;

  ngOnInit() {
    this.advice = this.list[Math.floor(Math.random() * this.list.length)];
  }
}
