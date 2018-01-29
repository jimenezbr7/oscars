let choicesByNames = {};

if (Cookies.getJSON('choicesByNames')) {
  choicesByNames = Cookies.getJSON('choicesByNames');
};
// Array of names to put in the <select>
const names = Object.keys(Cookies.getJSON('choicesByNames'));
for (i = 0; i < names.length; i++) {
  $('#picks_name').append(`<option value="${names[i]}">${names[i]}</option>`);
};

// Get the selected name from the dropdown
$('#picks_name').change(function() {
  const currentName = $('#picks_name').val();
  // Hide all other picks
  $('span').text('');
  // Show the picks that we want
  const currentBestPicture = choicesByNames[currentName].bestPicture;
  const currentBestDirector = choicesByNames[currentName].bestDirector;
  const currentBestActor = choicesByNames[currentName].bestActor;
  const currentBestActress = choicesByNames[currentName].bestActress;
  const currentSupportingActor = choicesByNames[currentName].bestSupportingActor;
  const currentSupportingActress = choicesByNames[currentName].bestSupportingActress;
  const currentAnimatedFeature = choicesByNames[currentName].bestAnimatedFeature;
  const currentAnimatedShort = choicesByNames[currentName].bestAnimatedShort;
  const currentDocumentaryFeature = choicesByNames[currentName].bestDocumentaryFeature;
  const currentDocumentaryShort = choicesByNames[currentName].bestDocumentaryShort;
  const currentLiveActionShort = choicesByNames[currentName].bestLiveActionShort;
  const currentForeignFilm = choicesByNames[currentName].bestForeignFilm;
  const currentOriginalScreenplay = choicesByNames[currentName].bestOriginalScreenplay;
  const currentAdaptedScreenplay = choicesByNames[currentName].bestAdaptedScreenplay;
  const currentFilmEditing = choicesByNames[currentName].bestFilmEditing;
  const currentVisualEffects = choicesByNames[currentName].bestVisualEffects;
  const currentSoundEditing = choicesByNames[currentName].bestSoundEditing;
  const currentSoundMixing = choicesByNames[currentName].bestSoundMixing;
  const currentCinematography = choicesByNames[currentName].bestCinematography;
  const currentProductionDesign = choicesByNames[currentName].bestProductionDesign;
  const currentOriginalSong = choicesByNames[currentName].bestOriginalSong;
  const currentOriginalScore = choicesByNames[currentName].bestOriginalScore;
  const currentCostumeDesign = choicesByNames[currentName].bestCostumeDesign;
  const currentOriginalMakeupAndHairstyling = choicesByNames[currentName].bestOriginalMakeupAndHairstyling;

  $('#best_picture').text(currentBestPicture);
  $('#best_director').text(currentBestDirector);
  $('#best_actor').text(currentBestActor);
  $('#best_actress').text(currentBestActress);
  $('#best_supporting_actor').text(currentSupportingActor);
  $('#best_supporting_actress').text(currentSupportingActress);
  $('#best_animated_feature').text(currentAnimatedFeature);
  $('#best_animated_short').text(currentAnimatedShort);
  $('#best_documentary_feature').text(currentDocumentaryFeature);
  $('#best_documentary_short').text(currentDocumentaryShort);
  $('#best_live_action_short').text(currentLiveActionShort);
  $('#best_foreign_film').text(currentForeignFilm);
  $('#best_original_screenplay').text(currentOriginalScreenplay);
  $('#best_adapted_screenplay').text(currentAdaptedScreenplay);
  $('#best_film_editing').text(currentFilmEditing);
  $('#best_visual_effects').text(currentVisualEffects);
  $('#best_sound_editing').text(currentSoundEditing);
  $('#best_sound_mixing').text(currentSoundMixing);
  $('#best_cinematography').text(currentCinematography);
  $('#best_production_design').text(currentProductionDesign);
  $('#best_original_song').text(currentOriginalSong);
  $('#best_original_score').text(currentOriginalScore);
  $('#best_costume_design').text(currentCostumeDesign);
  $('#best_original_makeup_and_hairstyling').text(currentOriginalMakeupAndHairstyling);
  $('.chosen_pick').css('display', 'block');
  console.log(currentDocumentaryShort);
  console.log(currentDocumentaryFeature);
});
