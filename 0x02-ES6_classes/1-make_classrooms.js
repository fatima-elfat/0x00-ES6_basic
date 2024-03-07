import ClassRoom from './0-classroom';
/**
 *
 */
export default function initializeRooms() {
  const numbers = [19, 20, 34];
  const inst = numbers.map((n) => new ClassRoom(n));
  return inst;
}
