import pickaxe from './lib/pickaxe';

exports.digCharacterCount = async (event: any, context: any, callback: Function) => {
  const currentCharacterCount = 25396002;
//    const currentCharacterCount = 26000000;

  let characterId = currentCharacterCount;
  let notFoundStreak = 0;
  try {
    do {
      characterId++;
      const result = await pickaxe.isCharacterExists(characterId);
      notFoundStreak = result ? 0 : ++notFoundStreak;
      console.log(`notFoundStreak: ${notFoundStreak}`);
    } while (notFoundStreak < 10);
    console.log(`final characterId: ${characterId}`);
    console.log(`last found characterId: ${characterId - 10}`);
    return callback(null, 'Success!');
  } catch (err) {
    throw new Error(err.message);
  }
}

