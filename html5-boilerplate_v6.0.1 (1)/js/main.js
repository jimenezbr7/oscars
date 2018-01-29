let choicesByNames = {};

if (Cookies.getJSON('choicesByNames')) {
  choicesByNames = Cookies.getJSON('choicesByNames');
};

function createChoicesObject() {
  return {
    'bestPicture': $('#best_picture_in').val(),
    'bestDirector': $('#best_director_in').val(),
    'bestActor': $('#best_actor_in').val(),
    'bestActress': $('#best_actress_in').val(),
    'bestSupportingActor': $('#best_supporting_actor_in').val(),
    'bestSupportingActress': $('#best_supporting_actress_in').val(),
    'bestAnimatedFeature': $('#best_animated_feature_in').val(),
    'bestAnimatedShort': $('#best_animated_short_in').val(),
    'bestDocumentaryFeature': $('#best_documentary_feature_in').val(),
    'bestDocumentaryShort': $('#best_documentary_short_in').val(),
    'bestLiveActionShort': $('#best_live_action_short_in').val(),
    'bestForeignFilm': $('#best_foreign_film_in').val(),
    'bestOriginalScreenplay': $('#best_original_screenplay_in').val(),
    'bestAdaptedScreenplay': $('#best_adapted_screenplay_in').val(),
    'bestFilmEditing': $('#best_film_editing_in').val(),
    'bestVisualEffects': $('#best_visual_effects_in').val(),
    'bestSoundEditing': $('#best_sound_editing_in').val(),
    'bestSoundMixing': $('#best_sound_mixing_in').val(),
    'bestCinematography': $('#best_cinematography_in').val(),
    'bestProductionDesign': $('#best_production_design_in').val(),
    'bestOriginalSong': $('#best_original_song_in').val(),
    'bestOriginalScore': $('#best_original_score_in').val(),
    'bestCostumeDesign': $('#best_costume_design_in').val(),
    'bestOriginalMakeupAndHairstyling': $('#best_original_makeup_and_hairstyling_in').val()
  };
}

$('#oscar_form').submit(function(event) {
  event.preventDefault();
  const name = $('#name').val();

  choicesByNames[name] = createChoicesObject();
  Cookies.set('choicesByNames', choicesByNames);
  $('input').val('');
});
