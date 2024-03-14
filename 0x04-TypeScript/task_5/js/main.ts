/** task 11*/
interface MajorCredits {
  credit: number;
  _brand: "Major";
}

interface MinorCredits {
  credit: number;
  _brand: "Minor";
}
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits
  } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits
  } as MinorCredits;
}
