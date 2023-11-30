/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/ManA.glb
Author: freddy1231 (https://sketchfab.com/freddy1231)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/felix-richter-0a077b01e9ed4d848d4929006c0d413b
Title: Felix Richter
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function ManA(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/ManA.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="FelixFBX" rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_8" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_10" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_12" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_14" rotation={[-Math.PI / 2, 0, 0]} />
                  <group
                    name="S23_Head00_REF"
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="S23_Legs02_REF"
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="S23_Torso007_REF"
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="S23_Hair_ACC007"
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="S23_Torso007_REF001"
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_71}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Material_72}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Material_74}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.Material_75}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Material_73}
                    skeleton={nodes.Object_15.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/ManA.glb");