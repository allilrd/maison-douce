import React, { useState } from ‘react’;
import {
SafeAreaView,
View,
Text,
TextInput,
TouchableOpacity,
ScrollView,
StyleSheet,
} from ‘react-native’;

const membres = [‘Alli’, ‘Erwan’, ‘Ema’, ‘Ewen’];

export default function App() {
const [taches, setTaches] = useState([]);
const [nouvelleTache, setNouvelleTache] = useState(’’);
const [responsable, setResponsable] = useState(‘Alli’);

function ajouterTache() {
if (!nouvelleTache.trim()) return;
setTaches([
…taches,
{
id: Date.now().toString(),
nom: nouvelleTache.trim(),
responsable,
faite: false,
},
]);
setNouvelleTache(’’);
}

function terminerTache(id) {
setTaches(taches.map(t =>
t.id === id ? { …t, faite: !t.faite } : t
));
}

return (
🏡 Maison Douce
Bonjour la famille ❤️

    <View style={styles.carte}>
      <Text style={styles.section}>Les tâches du jour</Text>
      <TextInput
        style={styles.champ}
        placeholder="Ex. Ranger la cuisine..."
        value={nouvelleTache}
        onChangeText={setNouvelleTache}
      />
      <Text style={styles.label}>Qui s'en occupe ?</Text>
      <View style={styles.membres}>
        {membres.map(m => (
          <TouchableOpacity
            key={m}
            style={[
              styles.membre,
              responsable === m && styles.selectionne,
            ]}
            onPress={() => setResponsable(m)}
          >
            <Text style={responsable === m
              ? styles.texteSelectionne : styles.texteMembre}>
              {m}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.bouton} onPress={ajouterTache}>
        <Text style={styles.texteBouton}>+ Ajouter une tâche</Text>
      </TouchableOpacity>
      {taches.length === 0 && (
        <Text style={styles.vide}>
          Aucune tâche pour le moment 🌷
        </Text>
      )}
      {taches.map(t => (
        <TouchableOpacity
          key={t.id}
          style={styles.tache}
          onPress={() => terminerTache(t.id)}
        >
          <Text style={styles.case}>{t.faite ? '☑' : '☐'}</Text>
          <View style={styles.details}>
            <Text style={[
              styles.nomTache,
              t.faite && styles.terminee,
            ]}>{t.nom}</Text>
            <Text style={styles.responsable}>{t.responsable}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.raccourcis}>
      <View style={styles.raccourci}>
        <Text style={styles.emoji}>❤️</Text>
        <Text style={styles.nomRaccourci}>Santé</Text>
      </View>
      <View style={styles.raccourci}>
        <Text style={styles.emoji}>🚗</Text>
        <Text style={styles.nomRaccourci}>Voitures</Text>
      </View>
      <View style={styles.raccourci}>
        <Text style={styles.emoji}>💶</Text>
        <Text style={styles.nomRaccourci}>Frais de santé</Text>
      </View>
    </View>
    <Text style={styles.note}>
      Une maison organisée, à votre rythme 🌿
    </Text>
  </ScrollView>
</SafeAreaView>

);
}

const styles = StyleSheet.create({
page: { flex: 1, backgroundColor: ‘#FAF6F0’ },
contenu: { padding: 22, paddingTop: 35 },
titre: {
fontSize: 30, fontWeight: ‘bold’,
color: ‘#526653’, textAlign: ‘center’,
},
sousTitre: {
fontSize: 21, color: ‘#846B5D’,
textAlign: ‘center’, marginTop: 10, marginBottom: 24,
},
carte: {
backgroundColor: ‘#FFFFFF’, padding: 18,
borderRadius: 22, marginBottom: 18,
},
section: {
fontSize: 20, fontWeight: ‘bold’,
color: ‘#526653’, marginBottom: 14,
},
champ: {
backgroundColor: ‘#F7F4EF’, padding: 13,
borderRadius: 12, fontSize: 16,
},
label: { marginTop: 15, marginBottom: 10, color: ‘#675C53’ },
membres: { flexDirection: ‘row’, flexWrap: ‘wrap’, gap: 7 },
membre: {
paddingVertical: 9, paddingHorizontal: 12,
borderRadius: 18, backgroundColor: ‘#F0ECE5’,
},
selectionne: { backgroundColor: ‘#526653’ },
texteMembre: { color: ‘#514B45’ },
texteSelectionne: { color: ‘#FFFFFF’, fontWeight: ‘bold’ },
bouton: {
backgroundColor: ‘#526653’, padding: 14,
borderRadius: 13, marginTop: 16, alignItems: ‘center’,
},
texteBouton: { color: ‘#FFFFFF’, fontWeight: ‘bold’, fontSize: 16 },
vide: { color: ‘#92867B’, textAlign: ‘center’, marginTop: 20 },
tache: {
flexDirection: ‘row’, alignItems: ‘center’,
paddingVertical: 13, borderBottomWidth: 1,
borderBottomColor: ‘#EEE7DE’,
},
case: { fontSize: 25, color: ‘#526653’, marginRight: 12 },
details: { flex: 1 },
nomTache: { fontSize: 16, color: ‘#403B36’ },
terminee: { textDecorationLine: ‘line-through’, color: ‘#92867B’ },
responsable: { fontSize: 13, color: ‘#8C7D70’, marginTop: 4 },
raccourcis: { flexDirection: ‘row’, gap: 9, marginBottom: 20 },
raccourci: {
flex: 1, backgroundColor: ‘#EDEFE6’,
borderRadius: 16, padding: 12, alignItems: ‘center’,
},
emoji: { fontSize: 25, marginBottom: 6 },
nomRaccourci: { fontSize: 12, color: ‘#526653’, textAlign: ‘center’ },
note: { textAlign: ‘center’, color: ‘#92867B’, marginBottom: 25 },
});
